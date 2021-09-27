<template>
  <v-layout>
    <v-col>
      <v-card class="mb-4">
        <v-card-title :class="`text-h4 font-weight-medium ${$style.nobreak}`">{{ test.title }}</v-card-title>
      </v-card>
      <v-expand-transition>
        <v-stepper v-if="!ended" v-model="current" vertical>
          <template
            v-for="(question, qIndex) in test.questions"
          >
            <v-stepper-step
              :step="qIndex + 1"
              :complete="current > qIndex + 1"
              :key="qIndex + '_step'"
              color="info"
            >
              Вопрос номер {{ qIndex + 1 }}
            </v-stepper-step>
            <v-stepper-content :step="qIndex + 1" :key="qIndex + '_content'">
              <section-test-question
                :question="question"
                :key="qIndex + '_question'"
                @next="next"
              />
            </v-stepper-content>
          </template>
        </v-stepper>
        <div v-else>
          <v-card height="200" class="d-flex justify-center  my-10">
            <v-card-title class="text-h4">
              Ваш результат: {{ result }}!
            </v-card-title>
          </v-card>
          <v-list>
            <template v-for="(answer, index) in form">
              <v-list-item :key="index + '_answ'">
                <v-list-item-content>
                  <span class="mb-4 text-h6">
                    {{ test.questions[index].title }}
                  </span>
                  <v-list-item-subtitle :class="answer.right ? 'success--text' : 'error--text'">
                    Ваш ответ: <span>{{ answer.title }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-if="!answer.right" class="success--text mt-2">
                    Правильный ответ: <span>{{ test.questions[index].answers.find(el => el.right === true).title }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon large :class="(answer.right ? 'success' : 'error') + '--text'">{{ answer.right ? 'mdi-checkbox-marked-circle' : 'mdi-alert-circle' }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-divider :key="index + '_divider'" v-if="index + 1 !== form.length" />
            </template>
          </v-list>
        </div>
      </v-expand-transition>
    </v-col>
  </v-layout>
</template>

<script>
  import page from '../../mixins/page'
  import { mapGetters } from 'vuex'
  import SectionTestQuestion from '../../components/sections/test/question'

  export default {
    name: 'TestPage',
    components: {SectionTestQuestion},
    mixins: [page()],
    data() {
      return {
        current: 1,
        form: []
      }
    },
    computed: {
      ...mapGetters('tests', ['getTest']),
      id() {
        return +this.$route.params.id
      },
      test() {
        const test = this.getTest(this.id)
        if (!test) {
          this.$nuxt.error({ statusCode: 404 })
        }
        return test
      },
      title() {
        return this.test.title
      },
      ended() {
        return this.test.questions.length === this.form.length
      },
      result() {
        const total = this.test.questions.length
        const right = this.form.filter(el => el.right === true).length
        return `${right} из ${total}`
      }
    },
    methods: {
      setup() {
        for (let question in this.test.questions) {
          this.form.push()
        }
      },
      next(value) {
        this.form.push(value)
        this.current++
      }
    },
    mounted() {
      this.setup()
    }
  }
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
