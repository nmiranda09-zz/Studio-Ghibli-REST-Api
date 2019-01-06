<template>
    <div class="page-main">
        <div class="hero-banner2"></div>

        <h1>Add new to Collection</h1>

        <div class="form">
            <label>Title:</label>
            <input type="text" v-model="result.title" placeholder="type something..." required/>

            <label>Director:</label>
            <input type="text" v-model="result.director" placeholder="type something..." required/>

            <label>Release Date:</label>
            <input type="text" v-model="result.release_date" placeholder="type something..." required/>

            <label>Rating Score:</label>
            <input type="text" v-model="result.rt_score" placeholder="type something..." required/>

            <label>Description:</label>
            <textarea v-model="result.description" placeholder="type something..." required></textarea>

            <div class="actions">
                <button class="save" title="Save" @click="saveCollection(result)">Save <i class="far fa-save"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: {
                    title: '',
                    director: '',
                    release_date: '',
                    rt_score: '',
                    description: '',
                }
            }
        },
        methods: {
            saveCollection() {
                fetch('https://ghibliapi.herokuapp.com/films', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.result.title,
                        director: this.result.director,
                        release_date: this.result.release_date,
                        rt_score: this.result.rt_score,
                        description: this.result.description,

                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
            }
        }
    }
</script>

<style scoped >
    h1 {
        margin: 30px 0 50px;
        padding: 20px;
        text-transform: uppercase;
        text-align: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        padding: 0 20px;
    }

    label {
        display: inline-block;
        width: 100%;
        margin-bottom: 10px;
        font-size: 20px;
        text-transform: uppercase;
        font-family: 'Sarabun', sans-serif;
    }

    input {
        width: 100%;
        border: 1px solid #2c4435;
        padding: 15px 20px;
        margin-bottom: 30px;
        border-radius: 5px;
        background: #eceaea;
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    textarea {
        border: 1px solid #2c4435;
        padding: 15px 20px;
        margin-bottom: 30px;
        border-radius: 5px;
        background: #e7e7e7;
        font-size: 16px;
        resize: none;
        min-height: 300px;
        overflow-y: auto;
        font-family: 'Sarabun', sans-serif;
    }

    .save {
        border: 0;
        background: #2c4435;
        padding: 15px 20px;
        font-size: 17px;
        text-transform: uppercase;
        color: #fff;
        border-radius: 5px;
        line-height: 1;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .save:focus {
        outline: none;
    }

    .save:hover {
        background: #4b6b57;
        color: #fff;
    }
</style>