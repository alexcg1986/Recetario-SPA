<template>
    <Menubar id="footer">
        <template #start>
            &copy; Mezdelex {{ new Date().getFullYear() }}
        </template>
        <template #end>
            <a href="https://github.com/alexcg1986" style="color:white">
                <i class="pi pi-github" style="fontSize: 2rem" />
            </a>
        </template>
    </Menubar>
</template>
