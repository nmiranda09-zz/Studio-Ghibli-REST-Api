<template>

    <div class="page-main">
        <div class="hero-banner"></div>

        <div class="home" id="home">
            <div class="text-banner">
                <h1>Studio Ghibli Collection</h1>
                <p>Studio Ghibli is one of the most acclaimed animation studios in the world, and the home of some of the most revered and beloved animated works to have ever graced the screen.</p>
            </div>

            <div class="collections">
                <div v-bind:class="'collection-' + result.id" v-for="(result, i) in results">
                    <div class="edit-active" v-if="editCollection === result.id">
                        <div>
                            <label>Title:</label><br />
                            <input v-on:keyup.13="updateCollection(result)" v-model="result.title" />
                        </div>

                        <div>
                            <label>Director:</label><br />
                            <input v-on:keyup.13="updateCollection(result)" v-model="result.director" />
                        </div>

                        <div>
                            <label>Release Date:</label><br />
                            <input v-on:keyup.13="updateCollection(result)" v-model="result.release_date" />
                        </div>

                        <div>
                            <label>Rating:</label><br />
                            <input v-on:keyup.13="updateCollection(result)" v-model="result.rt_score" />
                        </div>

                        <div>
                            <label>Description:</label><br />
                            <textarea v-on:keyup.13="updateCollection(result)" v-model="result.description" />
                        </div>

                        <div class="actions">
                            <button class="save" @click="updateCollection(result)" title="Save"><i class="far fa-save"></i></button>
                            <button class="cancel" @click="cancel" title="Cancel"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    
                    <div v-else>
                        <div class="content">
                            <strong class="title">{{result.title}}</strong>
                            <span class="director">Director: {{result.director}}</span>
                            <span class="release-date">Release Date: {{result.release_date}}</span>
                            <span class="rating">Rating: {{result.rt_score}}/100</span>
                            <p class="description">{{result.description}}</p>
                        </div>

                        <div class="actions">
                            <button class="edit" @click="editCollection = result.id" title="Edit"><i class="far fa-edit"></i></button>
                            <button class="delete" @click="deleteCollection(result.id, i)" title="Delete"><i class="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        
        data () {
            return {
                results: [],
                editCollection: null
            }
        },
        methods: {
            deleteCollection(id, i) {
                fetch('https://ghibliapi.herokuapp.com/films' + id, {
                    method: "DELETE"
                })
                .then(() => {
                    this.results.splice(i, 1);
                })
            },
            updateCollection(result) {
                fetch("https://ghibliapi.herokuapp.com/films" + result.id, {
                    body: JSON.stringify(result),
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    this.editCollection = null;
                })
            },

            cancel() {
                this.editCollection = null;
            }
        },

        mounted() {
           fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then((data) => {
                this.results = data;
            })
        }
    };
</script>


