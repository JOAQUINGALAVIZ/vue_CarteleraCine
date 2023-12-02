<script setup>

</script>


<template>
<header>
    <div class="mx-auto container px-5 py-16">
        <div>

        </div>
        <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">

            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="titulo">Busca tu pélicula
                </label>
                <input 
                    id="titulo"
                    type="text"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre de tu pélicula"
                >
            </div>

            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="genero">Géneros
                </label>
                <select 
                    id="genero"
                    class="p-3 w-full rounded-lg focus:outline-none"

                >
                    <option value="">-- Seleccione --</option>
                </select>
            </div>

            <input 
                type="submit"
                class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                value="Buscar"
            />
        </form>
    </div>
</header>
</template>

