<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md5>
                <v-card class="elevation-12" width="100%">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Регистрация</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                                :value="error"
                                type="warning"
                        >
                            {{error}}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field prepend-icon="person" name="email" label="E-mail" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password" :counter="6" v-model="password" :rules="passwordRules"></v-text-field>
                            <v-text-field prepend-icon="lock" name="confirm-password" label="Повторите пароль" id="passwordRepeat" type="password" :counter="6" v-model="confirmPassword" :rules="confirmPasswordRules"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click.prevent="signUp" :disabled="processing || !valid">Зарегистрироваться</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'sign-up',
        data() {
            return{
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,

                emailRules:  [
                    v => !!v || 'Пожалуйста, введите email',
                    v => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
                ],
                passwordRules:  [
                    v => !!v || 'Пожалуйста, введите пароль',
                    v => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
                ],
                confirmPasswordRules:  [
                    v => !!v || 'Пожалуйста, повторите введенный пароль',
                    v => v === this.password || 'Пароли не совпадают, перепроверьте'
                ],
            }
        },
        computed: {
            error() {
                return this.$store.getters.getError
            },
            processing() {
                return this.$store.getters.getProcessing
            },
            isUserAuthenticated() {
                return this.$store.getters.isUserAuthenticated
            }
        },
        watch: {
            isUserAuthenticated(val) {
                if(val === true) {
                    this.$router.push('/')
                }
            }
        },
        methods: {
            signUp() {
                this.$store.dispatch('SIGNUP', {email: this.email, password: this.password})
            }
        }
    }
</script>
<style>

</style>