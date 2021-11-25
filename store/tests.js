export const state = () => ({
  list: [
    {
      _id: 1,
      title: 'Тест №1',
      questions: [
        {
          img: require('~/assets/images/tests/1/tslaq1.png'),
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
          img: require('~/assets/images/tests/1/tslaq2.png'),
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
          img: require('~/assets/images/tests/1/tslaq3.png'),
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
          img: require('~/assets/images/tests/1/tslaq4.png'),
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
          img: require('~/assets/images/tests/1/tslaq5.png'),
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
          img: require('~/assets/images/tests/1/tslaq6.png'),
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
    },
    {
      _id: 2,
      title: 'Тест №2',
      questions: [
        {
          title: 'При движении биткоина вниз, какой исход будет у движения таких компаний как MSTR и COIN',
          answers: [
            {
              title: 'Вниз, так как следуют за биткоином',
              right: true,
              description: 'Вы ответили верно'
            }, {
              title: 'Вверх или никуда так как биткоин не является их главным активом',
              right: false,
              description: 'К сожалению, вы ответили неверно, эти две компании напрямую зависят от биткоина и следуют за его движением. Если не верите - сравните графики'
            }
          ]
        },
        {
          title: 'FAANG это...',
          answers: [
            {
              title: 'Индикатор технического анализа',
              right: false,
              description: 'Вы ответили неверно, это топ 5 высокотехнологичных компаний, включенных в состав NASDAQ : Facebook, Amazon, Apple, Netflix, Google'
            }, {
              title: 'Показатель технического анализа',
              right: false,
              description: 'Вы ответили неверно, это топ 5 высокотехнологичных компаний, включенных в состав NASDAQ : Facebook, Amazon, Apple, Netflix, Google'
            }, {
              title: 'Топ 5 высокотехнологичных компаний, включенных в состав NASDAQ',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/2/scrn1.png'),
          title: 'Перед вами график и красным овалом выделен сигнал от одного их индикаторов. Вопрос - что это за индикатор и какой сигнал он дает',
          answers: [
            {
              title: 'Этот индикатор называется MACD, он говорит о росте при пересечении двух кривых',
              right: false,
              description: 'Вы ответили неверно, это EMA'
            }, {
              title: 'Этот индикатор называется EMA, он говорит о росте при пересечение двух кривых',
              right: true,
              description: 'Вы ответили верно'
            }, {
              title: 'Этот индикатор называется Alligator, он говорит о росте при пересечении двух кривых',
              right: false,
              description: 'Вы ответили неверно, это EMA'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/2/scrn2.png'),
          title: 'Перед вами индикатор OBV, скажите, почему было падение?',
          answers: [
            {
              title: 'Падение было никак не связано с OBV',
              right: false,
              description: 'Вы ответили неверно, так как OBV показал нам, что резкий рост не вызван повышением объемов и означает скорейшее падение'
            }, {
              title: 'Падение было связано с чрезмерным количеством зеленых свечей',
              right: false,
              description: 'Вы ответили неверно, так как OBV показал нам, что резкий рост не вызван повышением объемов и означает скорейшее падение'
            }, {
              title: 'Падение было связано с неизменными объемами при резком росте цены актива',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/2/scrn3.png'),
          title: 'Станете ли вы входить в позицию. На графике стоят SQZMOM и MTF',
          answers: [
            {
              title: 'Да, так как SQZMOM говорит о скором росте',
              right: false,
              description: 'Вы ответили неверно, так как MTF красный и нет взаимного согласия у двух индикаторов'
            }, {
              title: 'Нет, так как нет взаимного согласия у двух индикаторов' ,
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Нет, так как тут дивергенция на SQZMOM',
              right: false,
              description: 'Вы ответили неверно, никакой дивергенции тут нет, нельзя входить из-за несогласия между друг-другом двух индикаторов, ведь MTF красный'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/2/scrn4.png'),
          title: 'Будем ли мы входить в позицию при одном индикаторе RSI?',
          answers: [
            {
              title: 'Да, так как после него состоялся рост и значит он был прав',
              right: false,
              description: 'Вы ответили неверно, мы не заходим по одному индикатору в позицию'
            }, {
              title: 'Да, так как он в зоне перепроданности' ,
              right: false,
              description: 'Вы ответили неверно, мы не заходим по одному индикатору в позицию'
            }, {
              title: 'Нет, так как по одному индикатору нельзя делать вывод по всей картине',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/2/scrn5.png'),
          title: 'Можно ли войти в позицию в данной ситуации, если на графике всего 2 индикатора?',
          answers: [
            {
              title: 'Нет, так как два индикатора это не стратегия, надо добавить еще один',
              right: false,
              description: 'Вы ответили неверно, мы можем зайти в позицию по той причине, что это ТФ неделя и я даже обвел это на графике для внимательных. На недельном ТФ мы можем войти в сделку по ЕМА 100/200 и уровням ПИВОТ'
            }, {
              title: 'Да, так как в данном случае с ТФ неделя мы имеем на это право' ,
              right: true,
              description: 'Вы ответили верно, на ТФ неделя можно входить по ЕМА 100/200 и уровням ПИВОТ'
            }, {
              title: 'Да, так как на скрине есть ЕМА, это самостоятельный индикатор',
              right: false,
              description: 'Вы ответили верно отчасти, в данном сучае причиной является длинный ТФ и связка ЕМА 100/200 + уровни ПИВОТ'
            }
          ]
        }
      ]
    },
    {
      _id: 3,
      title: 'Тест №3',
      questions: [
        {
          title: 'Стоит ли входить в компанию, которая показала рост на 1000% за последние 10 лет в долгосрочной или среднесрочной перспективе. Допустим - Amazon',
          answers: [
            {
              title: 'Не стоит, так как компания находится слишком высоко',
              right: false,
              description: 'Вы ответили неверно, рост компании только подстегивает ее будущие перспективы'
            }, {
              title: 'Не стоит, так как для долгосрочной торговли берут просевшие бумаги' ,
              right: false,
              description: 'Вы ответили неверно, откуда такое заключение? Оно не является фактом и правдой'
            }, {
              title: 'Стоит, так как рост в 1000% только подстегивает дальнейшие перспективы',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          title: 'Представьте себе ситуацию - вы вложили 100к.р в бумаги и потеряли 80%, хотите вернуть убыток и рационально ли будет вложить оставшиеся 20к.р в одну волатильную компанию на удачу?',
          answers: [
            {
              title: 'Да, конечно, иначе не отбить минус',
              right: false,
              description: 'Вы ответили неверно, это называется эмоциональное выгорание. Надо сменить стратегию, добавить средств и пробовать снова, но уже другим путем'
            }, {
              title: 'Нет, так как эти действия совершаются на эмоциях и ощущении полной потери',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Да, так и надо. Кто не рискует - тот не пьет шампанского',
              right: false,
              description: 'Вы ответили неверно, это называется эмоциональное выгорание. Надо сменить стратегию, добавить средств и пробовать снова, но уже другим путем'
            }
          ]
        },
        {
          title: 'Можно ли строить Фибоначчи по теням и телам свечи одновременно?',
          answers: [
            {
              title: 'Нет, так как Фибо строится только по телу свечи',
              right: false,
              description: 'Вы ответили неверно, такой способ позволяет нам выявить зону Фибо, которая выполняет те же функции'
            }, {
              title: 'Да, таким образом мы создаем сильные зоны Фибо',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Нет, так как у Фибо не может быть двойного уровня',
              right: false,
              description: 'Вы ответили неверно, такой способ позволяет нам выявить зону Фибо, которая выполняет те же функции'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/3/1.png'),
          title: 'Перед вами график Модерны с начерченными уровнями сопротивления и поддержки. Какой из уровней будет являться самым сильным?',
          answers: [
            {
              title: 'верхний уровень, так как он ближе расположен к текущей цене',
              right: false,
              description: 'Вы ответили неверно, самый сильный уровень поддержки будет нижний, так как это максимально допустимый нижний экстремум'
            }, {
              title: 'Средний уровень, так как он является золотой серединой между верхним и нижним',
              right: false,
              description: 'Вы ответили неверно, самый сильный уровень поддержки будет нижний, так как это максимально допустимый нижний экстремум'
            }, {
              title: 'Нижний уровень, так как он является максимально допустимым нижним экстремумом',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          img: require('~/assets/images/tests/3/2.png'),
          title: 'На основании графика предположите, есть ли вероятность пойти ниже, если мы находимся на ТФ 1 день и уровень Пивот S3',
          answers: [
            {
              title: 'Мы можем пойти ниже, так как Модерна дважды за последний год пробивала уровень S3',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Не можем, так как уровень S3 является очень сильным при падении',
              right: false,
              description: 'Вы ответили неверно, нет разницы рост или падение по силе уровня. Два раза пробили и третий можем'
            }, {
              title: 'Не можем, так как модерна ни разу не пробивала уровень S3 вниз за последний год',
              right: false,
              description: 'Вы ответили неверно, так как она пробивала S3 вверх, а никакой принципиальной разницы тут нет'
            }
          ]
        },
        {
          title: 'Какая из волн Вульфа является самой сильной и на какой волне мы идентифицируем этот метод ТА',
          answers: [
            {
              title: 'Самая сильная 6 волна, идентифицируем на 5',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Самая сильная 7 волна, идентифицируем на 6',
              right: false,
              description: 'Вы ответили неверно, сильная - 6, идентифицируем на 5'
            }, {
              title: 'Самая сильная 5 волна, идентифицируем на 4',
              right: false,
              description: 'Вы ответили неверно, сильная - 6, идентифицируем на 5'
            }
          ]
        },
        {
          title: 'При методе ТА по Волнам Вульфа мы должны входить в позицию когда...',
          answers: [
            {
              title: 'начинается 5 волна',
              right: false,
              description: 'Вы ответили неверно, в конце 5 волны'
            }, {
              title: 'начинается 4 волна',
              right: false,
              description: 'Вы ответили неверно, в конце 5 волны'
            }, {
              title: 'кончается 5 волна',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          title: 'При торговле по индесу мы сравниваем индекс с...',
          answers: [
            {
              title: 'Любой другой бумагой',
              right: false,
              description: 'Вы ответили неверно, только с бумагами из индекса'
            }, {
              title: 'Бумагами американского рынка',
              right: false,
              description: 'Вы ответили неверно, только с бумагами из индекса'
            }, {
              title: 'бумагами из этого индекса',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        },
        {
          title: 'Работает ли поглощение на широких ТФ? Допустим - 1 месяц',
          answers: [
            {
              title: 'Не работает, его используют только на 1 день - 1 неделя',
              right: false,
              description: 'Вы ответили неверно, чем шире ТФ - тем сильнее поглощение'
            }, {
              title: 'Не работает, так как оно работает на коротких ТФ, на длинных допускает много ошибок',
              right: false,
              description: 'Вы ответили неверно, чем шире ТФ - тем сильнее поглощение'
            }, {
              title: 'Работает, так как, чем шире ТФ - тем сильнее поглощение и его результат',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }
      ]
    },
    {
      _id: 4,
      title: 'Test №4',
      questions: [
        {
          title: 'Если график пересек облако Ichinoku сверху-вниз, то какой тренд задается и задается ли вообще?',
          answers: [
            {
              title: 'Тренд не задается, облако служить поддержкой или сопротивлением',
              right: false,
              description: 'Вы ответили неверно, облако также слежит трендовым индикаторов и ответ нисходящий тренд'
            }, {
              title: 'Восходящий тренд',
              right: false,
              description: 'Вы ответили неверно, тренд нисходящий'
            }, {
              title: 'Нисходящий тренд',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }, {
          title: 'Стоит ли на одном графике использовать облако Ichinoku в качестве поддержки и сопротивления, а также поставить уровни Пивот?',
          answers: [
            {
              title: 'Нет, не стоит. Оба индикатора имеют одинаковое значение',
              right: false,
              description: 'Вы ответили неверно, Пивот в данном случае ставится, чтобы понять, куда пойдет график после пробития облака Ичимоку'
            }, {
              title: 'Стоит, так как уровни покажут, куда направитя компания после того, как пробила облако',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Не стоит, Ичимоку слабый индикатор, лучше оставить только Пивот',
              right: false,
              description: 'Вы ответили неверно, Ичимоку очень сильный индикатор и не стоит его недооценивать '
            }
          ]
        }, {
          title: 'Что будет с инфляцией в условиях стандартной экономики ( без воздействия других сил ), если ключевая ставка будет опущена',
          answers: [
            {
              title: 'Инфляция упадет',
              right: false,
              description: 'Вы ответили неверно, она вырастет'
            }, {
              title: 'Инфляция вырастет',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Инфляция не изменится',
              right: false,
              description: 'Вы ответили неверно, она вырастет'
            }
          ]
        }, {
          img: require('~/assets/images/tests/4/1.png'),
          title: 'Перед вами график Модерны, на основании индикатора определите, куда МОЖЕТ пойти график дальше',
          answers: [
            {
              title: 'Он пойдет вниз, так как нисходящий тренд',
              right: false,
              description: 'Вы ответили неверно, в данный момент идет нисходящий тренд, но на основании только этого индикатора, может быть отскок в рост'
            }, {
              title: 'Этот индикатор не имеет сигнала на смену тренда, не могу определить',
              right: false,
              description: 'Вы ответили неверно, в данный момент идет нисходящий тренд, но на основании только этого индикатора, может быть отскок в рост'
            }, {
              title: 'В данный момент идет нисходящий тренд, но на основании только этого индикатора, может быть отскок в рост',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }, {
          img: require('~/assets/images/tests/4/2.jpg'),
          title: 'На основании графика предположите, куда продолжится движение. Индикатор OBV. Включен 5 минутный фрейм!',
          answers: [
            {
              title: 'Мы пойдем вниз, так как по OBV упали объемы на росте котировок',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Продолжим рост, так как сейчас начнется выкуп объемов',
              right: false,
              description: 'Вы ответили неверно, мы пойдем вниз, так как по OBV упали объемы на росте котировок'
            }, {
              title: 'Ничего не произойдет, так как маленький фрейм',
              right: false,
              description: 'Вы ответили неверно, мы пойдем вниз, так как по OBV упали объемы на росте котировок'
            }
          ]
        }, {
          title: 'Мы покупаем волатильную компанию в краткосрок, какой множитель для ATR вы возьмете?',
          answers: [
            {
              title: 'Из-за волатильности стоп в 3 ATR',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }, {
              title: 'Из-за волатильности стоп в 2 ATR',
              right: false,
              description: 'Вы ответили неверно, 3 ATR надежнее'
            }, {
              title: 'Нет смысла ставить стоп на волатильных бумагах, так как его выбьет',
              right: false,
              description: 'Вы ответили неверно, без стопов на волатильных бумагах, вы потеряете все свои деньги'
            }
          ]
        }, {
          title: 'Какой из двух индикаторов хуже работает на большом ТФ? MACD или KST ( знать наверняка )',
          answers: [
            {
              title: 'MACD, он запаздывает',
              right: false,
              description: 'Вы ответили неверно, это KST'
            }, {
              title: 'Оба плохо работают',
              right: false,
              description: 'Вы ответили неверно, вопрос кто из двух - ответ KST'
            }, {
              title: 'Оба запаздывают, но KST сильнее',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }, {
          title: 'Для чего нужна ЕМА 12 и 26?',
          answers: [
            {
              title: 'Для быстрой торговли на длинные дистанции',
              right: false,
              description: 'Вы ответили неверно, дистанции короткие'
            }, {
              title: 'Для длинной торговли на длинные дистанции',
              right: false,
              description: 'Вы ответили неверно, дистанции и торговля короткие под эти ЕМА'
            }, {
              title: 'Для короткой торговли на короткие дистанции',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }, {
          title: 'Что вы думаете о связке MACD + RSI + PSAR на короткой дистанции для новичков?',
          answers: [
            {
              title: 'Она слабая, хоть и ошибок выдает мало',
              right: false,
              description: 'Вы ответили неверно, она выдает много ошибок из-за шумов PSAR. Не подойдет для новичков'
            }, {
              title: 'Она сильная, подходит',
              right: false,
              description: 'Вы ответили неверно, очень много шумов от PSAR - для новичков трудно'
            }, {
              title: 'Связка слабая для новичков, так как ее трудно использовать. Много шумов на коротких дистанциях от PSAR',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }, {
          title: 'Что вы скажете о связке - Уровни Пивот + Ичимоку + MACD + Bollinger',
          answers: [
            {
              title: 'Слабая связка, так как нет направляющего тренд индикатора',
              right: false,
              description: 'Вы ответили неверно, связка неплохо себя отрабатывает и направляющий индикатор - ичимоку'
            }, {
              title: 'Слабая связка, так как три трендовых индикатора в одном месте',
              right: false,
              description: 'Вы ответили неверно, связка неплохо себя отрабатывает. Ичимоку - направление тренда, Пивот поддержка и сопротивление, а Боллинджер - подтверждение тренда'
            }, {
              title: 'Хорошая связка, где Ичимоку выступает в роли облака и задает тренд, Боллинджер его подтверждает, MACD назначает точку входа, а Пивот говорит до куда пойдем',
              right: true,
              description: 'Вы ответили верно, молодец!'
            }
          ]
        }
      ]
    },
    {
      _id: 5,
      title: 'Test №5',
      questions: [{
        img: require('~/assets/images/tests/5/1.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Рост',
            right: true,
            description: 'Вы ответили верно, молодец, ведь перед нами двойное дно!'
          }, {
            title: 'Падение',
            right: false,
            description: 'Вы ответили неверно, рост, так как фигура двойного дна закрылась'
          }, {
            title: 'Боковик',
            right: false,
            description: 'Вы ответили неверно, рост, так как фигура двойного дна закрылась'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/2.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Падение',
            right: false,
            description: 'Вы ответили неверно, на графике фигура вымпела!'
          }, {
            title: 'Рост',
            right: true,
            description: 'Вы ответили верно, молодец, ведь перед нами вымпел'
          }, {
            title: 'Боковик',
            right: false,
            description: 'Вы ответили неверно, на графике фигура вымпела!'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/3.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Рост',
            right: false,
            description: 'Вы ответили неверно, на графике фигура голова и плечи!'
          }, {
            title: 'Падение',
            right: true,
            description: 'Вы ответили верно, молодец, ведь перед нами голова и плечи'
          }, {
            title: 'Боковик',
            right: false,
            description: 'Вы ответили неверно, на графике фигура голова и плечи!'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/4.jpg'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Падение',
            right: false,
            description: 'Вы ответили неверно, на графике бычья волна вульфа'
          }, {
            title: 'Рост',
            right: true,
            description: 'Вы ответили верно, молодец, ведь перед нами бычья волна вульфа'
          }, {
            title: 'Боковик',
            right: false,
            description: 'Вы ответили неверно, на графике бычья волна вульфа'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/5.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Рост',
            right: false,
            description: 'Вы ответили неверно, тут нет волны вульфа, так как волна 5 не ниже 3'
          }, {
            title: 'Падение',
            right: false,
            description: 'Вы ответили неверно, тут нет оснований полагать на падение или рост'
          }, {
            title: 'Ничего',
            right: true,
            description: 'Вы ответили верно, тут нет волны вульфа, так как волна 5 не ниже 3'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/6.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Рост',
            right: false,
            description: 'Вы ответили неверно, тут медвежья волна вульфа'
          }, {
            title: 'Падение',
            right: true,
            description: 'Вы ответили верно, тут медвежья волна вульфа'
          }, {
            title: 'Ничего',
            right: false,
            description: 'Вы ответили неверно, тут медвежья волна вульфа'
          }
        ]
      }, {
        img: require('~/assets/images/tests/5/7.png'),
        title: 'На основании графика дайте ответ, куда продолжится движение?',
        answers: [{
          title: 'Рост',
          right: true,
          description: 'Вы ответили верно, очень часто 6 волна вульфа не доходит до линии и отскакивает от Фибо или Пивот'
        }, {
          title: 'Падение',
          right: false,
          description: 'Вы ответили неверно, очень часто 6 волна вульфа не доходит до линии и отскакивает от Фибо или Пивот'
        }, {
          title: 'Ничего',
          right: false,
          description: 'Вы ответили неверно, очень часто 6 волна вульфа не доходит до линии и отскакивает от Фибо или Пивот'
        }]
      }, {
        img: require('~/assets/images/tests/5/8.png'),
        title: 'Какое движение может последовать на основании графика?',
        answers: [
          {
            title: 'Рост',
            right: false,
            description: 'Вы ответили неверно, будет падение, так как двойная вершина и возврат к сопротивлению предыдущего канала'
          }, {
            title: 'Боковик',
            right: false,
            description: 'Вы ответили неверно, будет падение, так как двойная вершина и возврат к сопротивлению предыдущего канала'
          }, {
            title: 'Падение',
            right: true,
            description: 'Вы ответили верно, двойная вершина + канальная система при которой идет возврат к сопротивлению предыдущего канала'
          }
        ]
      }]
    }
  ]
})

export const getters = {
  getTest: state => id => {
    return state.list.find(el => el._id === id)
  }
}
