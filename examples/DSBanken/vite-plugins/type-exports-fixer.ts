import type { Plugin } from 'vite';

/**
 * This plugin transforms TypeScript exports to prevent runtime errors with TypeScript types.
 * It intercepts modules that export types along with values using `export { Value, TypeName }`
 * syntax, and transforms them to ensure types don't cause runtime errors in the browser.
 */
export function typeExportsFixer(): Plugin {
  return {
    name: 'type-exports-fixer',
    
    /**
     * Transform ESM exports of TypeScript types to make them compatible with Vite bundling.
     * This effectively strips out type exports that would cause runtime errors.
     */
    transform(code, id) {
      // Only process TypeScript files from our packages
      if (!id.includes('/packages/') || (!id.endsWith('.ts') && !id.endsWith('.tsx'))) {
        return null;
      }

      // Files in node_modules shouldn't be processed
      if (id.includes('node_modules')) {
        return null;
      }

      try {
        // Only process files that have export statements
        if (!code.includes('export {')) {
          return null;
        }

        // First, we need to identify what exports are types vs values
        // Look for type/interface declarations in the source file
        const typeDeclarations = new Set<string>();
        
        // Find type declarations: export type X, export interface Y
        const typeRegex = /export\s+(?:type|interface)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
        let typeMatch;
        while ((typeMatch = typeRegex.exec(code)) !== null) {
          typeDeclarations.add(typeMatch[1]);
        }

        // Also look for common type patterns that might not be explicitly declared as types
        // This includes Props, Handle, Config, Options, etc.
        const commonTypePatterns = /\b([a-zA-Z]+(?:Props?|Handle|Config|Options?|Settings?|State|Context))\b/g;
        let patternMatch;
        while ((patternMatch = commonTypePatterns.exec(code)) !== null) {
          typeDeclarations.add(patternMatch[1]);
        }

        // Use a regex to match export statements
        // This regex finds exports like "export { X, YProps } from './file';"
        const exportRegex = /export\s*\{([^}]+)\}\s*from\s*['"](.*)['"];?/g;
        let match;
        let modifiedCode = code;

        while ((match = exportRegex.exec(code)) !== null) {
          const fullExport = match[0]; // The entire export statement
          const exportItems = match[1]; // The items being exported
          const source = match[2]; // The source module

          // Split the export items and filter out likely type exports
          const items = exportItems.split(',').map(item => item.trim());
          const valueItems = items.filter(item => {
            // Remove items that are likely types
            return !typeDeclarations.has(item) && 
                   !/[a-zA-Z]+(?:Props?|Handle|Config|Options?|Settings?|State|Context|Type)$/.test(item);
          });
          
          // If we filtered out some types, create a new export statement
          if (valueItems.length !== items.length) {
            if (valueItems.length > 0) {
              // Replace with the filtered exports
              const newExport = `export { ${valueItems.join(', ')} } from '${source}';`;
              modifiedCode = modifiedCode.replace(fullExport, newExport);
            } else {
              // All exports were types, remove the entire statement
              modifiedCode = modifiedCode.replace(fullExport, '');
            }
          }
        }

        // Only return modified code if changes were made
        if (modifiedCode !== code) {
          return {
            code: modifiedCode,
            map: null
          };
        }
      } catch (error) {
        console.error(`Error processing ${id}:`, error);
      }

      return null;
    }
  };
}
