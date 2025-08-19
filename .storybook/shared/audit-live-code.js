#!/usr/bin/env node

/**
 * Audit script to identify packages that need live code editor standardization
 */

const fs = require('fs');
const path = require('path');

const PACKAGES_DIR = path.join(__dirname, '../../packages');

function findStoryFiles(dir) {
    const results = [];
    
    function scan(currentDir) {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && item !== 'node_modules' && item !== 'dist' && item !== 'lib' && item !== 'es') {
                scan(fullPath);
            } else if (item.endsWith('.stories.tsx')) {
                results.push(fullPath);
            }
        }
    }
    
    scan(dir);
    return results;
}

function analyzeStoryFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(PACKAGES_DIR, filePath);
    
    const analysis = {
        path: relativePath,
        hasLiveCode: filePath.includes('.livecode'),
        hasManualTransform: content.includes('transform:') && content.includes('_code: string'),
        hasCreateLiveCodeStory: content.includes('createLiveCodeStory'),
        packageName: relativePath.split('/')[0],
        componentName: path.basename(filePath, '.stories.tsx').replace('.livecode', '').replace('.livecode-shared', ''),
        isShared: filePath.includes('.livecode-shared'),
    };
    
    return analysis;
}

function main() {
    console.log('🔍 Auditing Live Code Editor Usage Across Packages\n');
    
    const storyFiles = findStoryFiles(PACKAGES_DIR);
    const analyses = storyFiles.map(analyzeStoryFile);
    
    // Group by package
    const packageGroups = {};
    analyses.forEach(analysis => {
        if (!packageGroups[analysis.packageName]) {
            packageGroups[analysis.packageName] = [];
        }
        packageGroups[analysis.packageName].push(analysis);
    });
    
    // Summary statistics
    const totalPackages = Object.keys(packageGroups).length;
    const packagesWithLiveCode = Object.keys(packageGroups).filter(pkg => 
        packageGroups[pkg].some(story => story.hasLiveCode)
    ).length;
    const storiesWithManualTransforms = analyses.filter(a => a.hasManualTransform).length;
    const totalLiveCodeStories = analyses.filter(a => a.hasLiveCode).length;
    
    console.log('📊 SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total packages: ${totalPackages}`);
    console.log(`Packages with live code editors: ${packagesWithLiveCode}`);
    console.log(`Total live code stories: ${totalLiveCodeStories}`);
    console.log(`Stories with manual transforms: ${storiesWithManualTransforms}`);
    console.log();
    
    // Manual transforms that need migration
    console.log('🚨 MANUAL TRANSFORMS TO MIGRATE');
    console.log('='.repeat(50));
    const manualTransforms = analyses.filter(a => a.hasManualTransform);
    if (manualTransforms.length === 0) {
        console.log('✅ No manual transforms found!');
    } else {
        manualTransforms.forEach(story => {
            console.log(`❌ ${story.path}`);
        });
    }
    console.log();
    
    // Packages with live code editors
    console.log('✅ PACKAGES WITH LIVE CODE EDITORS');
    console.log('='.repeat(50));
    Object.keys(packageGroups)
        .filter(pkg => packageGroups[pkg].some(story => story.hasLiveCode))
        .forEach(pkg => {
            const liveCodeStories = packageGroups[pkg].filter(story => story.hasLiveCode);
            console.log(`📦 ${pkg}`);
            liveCodeStories.forEach(story => {
                const status = story.isShared ? '🔗 shared' : '📝 individual';
                console.log(`   ${status} ${story.componentName}`);
            });
            console.log();
        });
    
    // Packages without live code editors (candidates for addition)
    console.log('🎯 PACKAGES WITHOUT LIVE CODE EDITORS');
    console.log('='.repeat(50));
    const packagesWithoutLiveCode = Object.keys(packageGroups)
        .filter(pkg => !packageGroups[pkg].some(story => story.hasLiveCode))
        .sort();
    
    if (packagesWithoutLiveCode.length === 0) {
        console.log('🎉 All packages have live code editors!');
    } else {
        packagesWithoutLiveCode.forEach(pkg => {
            const stories = packageGroups[pkg];
            const mainComponents = stories.filter(s => !s.path.includes('/src/') || 
                s.componentName === pkg.replace('ffe-', '').replace('-react', '')
            );
            
            console.log(`📦 ${pkg} (${stories.length} stories)`);
            
            // Show main component candidates
            const candidates = stories
                .filter(s => {
                    const name = s.componentName.toLowerCase();
                    const pkgBase = pkg.replace('ffe-', '').replace('-react', '').toLowerCase();
                    return name === pkgBase || name.includes(pkgBase) || 
                           ['button', 'card', 'input', 'accordion', 'dropdown', 'modal'].some(keyword => name.includes(keyword));
                })
                .slice(0, 3); // Show top 3 candidates
            
            if (candidates.length > 0) {
                console.log('   🎯 Candidates for live code:');
                candidates.forEach(candidate => {
                    console.log(`      • ${candidate.componentName}`);
                });
            } else {
                console.log('   📝 Components:');
                stories.slice(0, 3).forEach(story => {
                    console.log(`      • ${story.componentName}`);
                });
            }
            console.log();
        });
    }
    
    // Recommendations
    console.log('💡 RECOMMENDATIONS');
    console.log('='.repeat(50));
    console.log('1. Migrate manual transforms first (highest priority)');
    console.log('2. Add live code editors to interactive components (buttons, forms, etc.)');
    console.log('3. Add live code editors to layout components (cards, grids, etc.)');
    console.log('4. Consider shared live code editors for component families');
    console.log();
    console.log('📖 See LIVE_CODE_GUIDE.md for implementation details');
}

if (require.main === module) {
    main();
}

module.exports = { findStoryFiles, analyzeStoryFile };
