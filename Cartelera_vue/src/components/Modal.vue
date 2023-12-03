<script setup>
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import {usePeliculasStore} from '../stores/peliculas' 

    import {useModalStore} from  '../stores/modal'

    const modal = useModalStore()
    const peliculas = usePeliculasStore()

    const getPosterURL = (posterPath) => {
      const baseURL = "https://image.tmdb.org/t/p/";
      return posterPath ? baseURL + "w500" + posterPath : null;
    };

    const formatoSipnosis = () => {
      const sipnosisPelicula = document.createElement('DIV')
      const sipnosis = peliculas.pelicula.overview
      const sipnosisParrafo = document.createElement('P')
      sipnosisParrafo.classList.add('text-lg')
      sipnosisParrafo.textContent = sipnosis
      sipnosisPelicula.appendChild(sipnosisParrafo)

      return sipnosisPelicula
    }

</script>

<template>
    <TransitionRoot as="template" :show="modal.modal" >
      <Dialog as="div" class="relative z-10" @close="modal.handleClickModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div>
                  <div class="mt-3">
                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                        {{peliculas.pelicula.title}}

                    </DialogTitle>

                    <img
                      :src="getPosterURL(peliculas.pelicula.poster_path)"
                      :alt="'Poster de ' + peliculas.pelicula.title"
                    />

                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                      Sipnosis
                    </DialogTitle>

                    <div v-html="formatoSipnosis().outerHTML"></div>

                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                  <button
                    type="button"
                    class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                    @click="modal.handleClickModal()"
                  >
                    Cerrar
                  </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>