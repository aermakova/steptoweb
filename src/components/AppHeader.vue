<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-lg-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`mobilemenuitem${i}`" :to="item.route">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="signOut" v-if="isUserAuthenticated">
                    <v-list-tile-action>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Выйти</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'<Step To Web/>'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn v-for="(item, i) in menuItems" flat :key="`menuitem${i}`" :to="item.route">
                    <v-icon dark left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
                <v-btn flat @click="signOut" v-if="isUserAuthenticated">
                    <v-icon dark left>mdi-logout</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"><v-icon>mdi-menu</v-icon></v-toolbar-side-icon>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        name: 'app-header',
        data() {
            return{
                drawer: false
            }
        },
        computed: {
            isUserAuthenticated() {
                return this.$store.getters.isUserAuthenticated
            },
            menuItems(){
                return this.isUserAuthenticated ? [
                    {
                        icon: 'mdi-code-tags',
                        title: 'Примеры',
                        route: '/examples'
                    },
                    {
                        icon: 'mdi-plus',
                        title: 'Добавить',
                        route: '/example-add'
                    },
                    {
                        icon: 'mdi-account-circle-outline',
                        title: 'Профиль',
                        route: '/profile'
                    }

                ] :
                [
                    {
                        icon: 'mdi-login',
                        title: 'Войти',
                        route: '/sign-in'
                    },
                    {
                        icon: 'mdi-lock-open-outline',
                        title: 'Регистрация',
                        route: '/sign-up'
                    },
                    {
                        icon: 'mdi-code-tags',
                        title: 'Примеры',
                        route: '/example'
                    }
                ]
            }
        },
        methods: {
            signOut(){
                this.$confirm('Вы действительно хотите выйти?').then(res => {
                    if (res){
                        this.$store.dispatch('SIGN_OUT')
                    }
                })
            }
        }
    }
</script>

<style>
</style>