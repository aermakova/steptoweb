<template>
    <v-card hover width="100%" color="info" class="white--text">
        <v-img
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">{{example.title}}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title color="cyan darken-2">
            <v-layout>
                <v-flex>
                    <span class="span black--text text--secondary">{{example.datePublish}}</span><br>
                    <span class="span">{{example.description}}</span><br>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-actions>
            <ul class="tags-list">
                <li v-for="(technology, i) in example.technologies" :key="`technologyItem${i}`" class="tags-list__item"><a>{{technology}}</a></li>
            </ul>
        </v-card-actions>
        <v-card-actions>
            <ul class="tags-list">
                <li v-for="(tag, i) in example.tags" :key="`tagitem${i}`" class="tags-list__item"><a>{{tag}}</a></li>
            </ul>
        </v-card-actions>
        <v-card-actions class="pa-3">
            <span>Автор:</span>
            <div class="ml-1">
                <span>{{example.author}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="yellow">
                <v-icon left>visibility</v-icon>
                Открыть</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions class="pa-3" color="black">
            Рейтинг:
            <v-spacer></v-spacer>
            <v-rating v-model="example.rating" color="yellow" dense half-increments></v-rating>
            <div class="ml-1">
                <span>{{example.rating}}</span>/
                <span>{{example.ratingsCount}}</span>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            'example': {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>