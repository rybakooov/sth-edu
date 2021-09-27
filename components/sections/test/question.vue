<template>
  <v-form ref="form">
    <v-card-title :class="$style.nobreak">{{ question.title }}</v-card-title>
    <div class="d-flex justify-center mb-4">
      <v-dialog>
        <template #activator="{ on }">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="question.img"
              v-on="on"
              :class="`flex-grow-0 ${$style.pointer}`"
            >
              <v-scale-transition>
                <div
                  v-if="hover"
                  :class="`d-flex justify-center align-center ${$style.overlay}`"
                  style="height: 100%;"
                >
                  <v-icon>mdi-magnify-plus-outline</v-icon>
                </div>
              </v-scale-transition>
            </v-img>
          </v-hover>
        </template>
        <v-card>
          <v-img :src="question.img" />
        </v-card>
      </v-dialog>
    </div>
    <v-expand-transition mode="out-in">
      <v-radio-group v-if="!finished" :rules="rules" class="px-4" :name="question.title" v-model="answer">
        <v-radio
          v-for="(answer, aIndex) in question.answers"
          :key="aIndex + '_answer'"
          :label="answer.title"
          :name="question.title"
          :value="answer"
          color="info"
          required
        />
      </v-radio-group>
      <v-alert v-else :type="answer.right ? 'success' : 'error'">
        {{ answer.description }}
      </v-alert>
    </v-expand-transition>
    <v-btn class="info mt-4" block outlined @click="onClick">{{ finished ? (last ? 'Результат' : 'Следующий вопрос') : 'Показать ответ' }}</v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'SectionTestQuestion',
    props: {
      question: {
        type: Object,
        required: true
      },
      last: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        answer: null,
        finished: false,
        rules: [v => v !== null || 'Выберите один ответ']
      }
    },
    methods: {
      onClick() {
        const valid = this.validate()
        if (!valid) {
          return
        }
        if (!this.finished) {
          this.finished = true
        } else {
          this.$emit('next', this.answer)
        }
      },
      validate () {
        return this.$refs.form.validate()
      }
    }
  }
</script>

<style module lang="scss">
  .pointer {
    cursor: pointer;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .nobreak {
    word-break: normal;
  }
</style>
