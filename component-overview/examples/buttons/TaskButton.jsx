import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

() => {
    const addIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTQ1MC4wMDFoLTIwMHEtMTIuNzUgMC0yMS4zNzUtOC42MjgtOC42MjUtOC42MjktOC42MjUtMjEuMzg0IDAtMTIuNzU2IDguNjI1LTIxLjM3MSA4LjYyNS04LjYxNSAyMS4zNzUtOC42MTVoMjAwdi0yMDBxMC0xMi43NSA4LjYyOC0yMS4zNzUgOC42MjktOC42MjUgMjEuMzg0LTguNjI1IDEyLjc1NiAwIDIxLjM3MSA4LjYyNSA4LjYxNSA4LjYyNSA4LjYxNSAyMS4zNzV2MjAwaDIwMHExMi43NSAwIDIxLjM3NSA4LjYyOCA4LjYyNSA4LjYyOSA4LjYyNSAyMS4zODQgMCAxMi43NTYtOC42MjUgMjEuMzcxLTguNjI1IDguNjE1LTIxLjM3NSA4LjYxNWgtMjAwdjIwMHEwIDEyLjc1LTguNjI4IDIxLjM3NS04LjYyOSA4LjYyNS0yMS4zODQgOC42MjUtMTIuNzU2IDAtMjEuMzcxLTguNjI1LTguNjE1LTguNjI1LTguNjE1LTIxLjM3NXYtMjAwWiIvPjwvc3ZnPg==";
    return (
        <ButtonGroup thin={true}>
            <TaskButton icon={<Icon fileUrl={addIcon} />}>Legg til bruker</TaskButton>
        </ButtonGroup>
    );
}

