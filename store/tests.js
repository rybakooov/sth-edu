export const state = () => ({
  list: [
    {
      _id: 1,
      title: 'Тест №1',
      questions: [
        {
          img: require('~/assets/images/tests/tslaq1.png'),
          title: 'Какое дальнейшее движение может следовать ( на скрине ЕМА 200 )?',
          answers: [
            {
              title: 'Рост, отскок от зоны S1 и ЕМА 200 на дневном ТФ',
              right: true,
              description: 'Вы ответили верно, ЕМА 200 и зона S1 выступают зоной сильной поддержки и при риск ситуации можно пробовать брать в лонг/шорт ( в зависимости от ситуации )'
            }, {
              title: 'Падение, зона S1 слишком слабая, а ЕМА 200 не выступает поддержкой',
              right: false,
              description: 'К сожалению, вы ответили неверно, ЕМА 200 и зона S1 выступают зоной сильной поддержки и при риск ситуации можно пробовать брать в лонг/шорт ( в зависимости от ситуации )'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/tslaq2.png'),
          title: 'Какой индикатор вы видите на графике, как называется его сигнал и о чем он говорит',
          answers: [
            {
              title: 'Индикатор RSI, стандартное отклоенение, график пойдет вверх',
              right: false,
              description: 'Вы ответили неверно, индикатор MACD, сигнал - дивергенция, график пойдет вниз'
            }, {
              title: 'Индикатор MACD, обычное пересечение, график пойдет вниз',
              right: false,
              description: 'Вы ответили неверно, так как название сигнала - дивергенция'
            }, {
              title: 'Индикатор MACD, дивергенция, график пойдеит вниз',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/tslaq3.png'),
          title: 'Перед вами индикатор Bollinger Bands, у него есть большое количество сигналов. Определите, есть ли сигнал в данном случае, при условии, что красную зону нисходящего тренда мы не берем за сигнал, а сам индикатор стоит на третьем множителе',
          answers: [
            {
              title: 'Сигнал есть, он указывает на нисходящий тренд, это выкуп зеленой свечой',
              right: false,
              description: 'Вы ответили неверно, такого сигнала не существует'
            }, {
              title: 'Сигнала нет, только нисходящий тренд по крайной зоне',
              right: false,
              description: 'Вы ответили неверно, так как тут есть выход из зоны боллинджера на третьем множителе, что приводит к резкому выкупу и всплеску волатильности в данный момент'
            }, {
              title: 'Сигнал есть, это выход свечи за зону боллинджера на третьем множителе, что считается сильным сигналом к выкупу ',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/tslaq4.png'),
          title: 'Перед вами индикатор OBV, проанализируйте график и примите решение, какой сигнал показан и что он означает',
          answers: [
            {
              title: 'Сигнал называется конвергенция и означает рост объемов в момент спада, что создает некоторую корреляцию и выкуп',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Сигнал называется дивергенция и означает продолжение падения',
              right: false,
              description: 'Вы ответили неверно, сигнал - конвергеция и означает рост'
            }, {
              title: 'Сигнала нет, OBV может показывать исключительно объемы ',
              right: false,
              description: 'Вы ответили неверно, у OBV большое количество различных сигналов и их интерпретация вариативна'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/tslaq5.png'),
          title: 'Перед вами индикатор в виде сетки, как он называется и что случится далее на основании графика ',
          answers: [
            {
              title: 'Индикатор MACD, будет падение',
              right: false,
              description: 'Вы ответили неверно, индикатор - коррекция по Фибонначи и будет рост, а не падение'
            }, {
              title: 'Индикатор коррекция по Фибонначи, будет рост',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Индикатор Уровни PIVOT по Фибонначи и будет рост',
              right: false,
              description: 'Вы ответили неверно, это коррекция по Фибонначи, а не уровни PIVOT'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/tslaq6.png'),
          title: 'Определите какой перед вами индикатор и какой сигна он показывает',
          answers: [
            {
              title: 'Индикатор RSI, будет падение',
              right: false,
              description: 'Вы ответили неверно, так как будет рост'
            }, {
              title: 'Индикатор MACD, будет падение',
              right: false,
              description: 'Вы ответили неверно, индикатор RSI и будет рост'
            }, {
              title: 'Индикатор RSI и будет рост',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }
      ]
    }
  ]
})

export const getters = {
  getTest: state => id => {
    return state.list.find(el => el._id === id)
  }
}
