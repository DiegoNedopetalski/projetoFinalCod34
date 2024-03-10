<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento" />
            <div class="stats">
                <StatVue title="Categorias" :value="stat.categories"
                    icon="fa fa-folder" color="#d54d50" />
                <StatVue title="Artigos" :value="stat.articles"
                    icon="fa fa-file" color="#3bc480" />
                <StatVue title="Usuários" :value="stat.users"
                    icon="fa fa-user" color="#3282cd" />
            </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import StatVue from './StatVue.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'HomeVue',
    components: { PageTitle, StatVue },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`)
                .then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>