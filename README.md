# Демо

https://andreireznikov.github.io/true-code-test-task-demo/landing-page.html

# Технологии

- Разделение элементов на независимые блоки: методология *БЭМ*
- Реализация компонентного подхода: шаблонизатор *Pug*
- Написание стилей: препроцессор *SCSS*
- Сборка проекта: *Webpack*
- Соблюдение единообразия кода: *eslint*, *prettier* и *stylelint*

# Трудности при работе над заданием

Самыми большими трудностями для меня при работе над заданием были: реализация *анимаций* и *"наложение" видео на текст*.

Учитывая большое количество слоёв (видео, космический фон, дымка и др.), было сложно вывести надпись с видео на передний план.

На картинке показано как это было сделано:

![steps](/readme-img/steps.jpg "steps")

1. Слой видео, из него нам нужно получить только часть, которая будет отображаться "внутри" слова Марс

2. Заголовок растянутый на всю ширину и высоту экрана с чёрным background и белым текстом. Для наложения части видео на тест используется свойство *mix-blend-mode: darken;*

3. Черный экран. Нужен для плавного появления надписи Марс на космическом фоне. В момент начала анимации плавно исчезает

4. Для космического фона используется свойство *mix-blend-mode: lighten;*. Для того, чтобы более светлые, чем видео звёзды не накладывались на видео, добавлена чёрная надпись Марс

5. Для отображения надписи поверх дымки, к слою дымки применяются те же свойства, что и для космического фона

Для каждого слоя заданы определённые анимации и время появления/скрытия элемента.

Также, среди трудных моментов могу выделить большое количество абсолютно позиционированных элементов. Часто они не помещались в окно браузера и с ними нельзя было взаимодействовать. Пришлось сделать высоту главного контейнера больше высоты экрана для небольших высот экрана. Думаю, можно было сделать лучше, но не хватило времени.

# Примечания

В проекте использовалась версия плагина *air-datepicker*, не совместимая с последними версиями браузера Safari. Не успел это исправить.

*dropdown* для выбора количества пассажиров писал самостоятельно при работе с другим проектом. Перенёс в этот проект с небольшими изменениями.

При работе с браузером Safari не срабатывал нужный для анимации появления надписи Марс setTimeout. Использовал альтернативное решение (requestAnimationFrame).

Для расчёта таймингов анимации дымки добавил *animation-timing-function: cubic-bezier(.62, .91, .53, .87);*. Резкого замедления в конце достичь не удалось, анимация проходит более плавно, чем показано в примере.

При работе над проектом я старался следовать этим стандартам: [best practices](https://github.com/fullstack-development/front-end-best-practices)

# Совместимость

Проект запускался на Node.js 18.16.1 и npm 9.5.1

# Использованные библиотеки

- air-datepicker ^2.2.3
- jquery ^3.6.0
- normalize.css 8.0.1

# Работа с проектом

Сначала вы должны создать копию удаленного репозитория локально:

`https://github.com/AndreiReznikov/true-code-test-task`

Затем вам необходимо установить все необходимые пакеты для работы с проектом. Используйте следующую команду в локальном репозитории:

`npm install`

# Команды npm

Локальная работа с проектом:
```
npm run server
```
Сборка dev версии:
```
npm run dev
```
Сборка prod версии:
```
npm run prod
```
Проверка на ошибки eslint:
```
npm run lint
```
Исправление ошибок eslint:
```
npm run fix:lint
```
Проверка на ошибки stylelint:
```
npm run stylelint
```
Исправление ошибок stylelint:
```
npm run fix:stylelint
```

