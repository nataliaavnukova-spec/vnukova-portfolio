# vnukova-portfolio

Сайт-портфоліо Наталі Внукової — UI/UX та Product Designer.

**Сайт:** https://vnukova-portfolio.vercel.app

- Стек: [Next.js](https://nextjs.org) (App Router) + TypeScript + CSS Modules
- Шрифти: Onest та Playfair Display (Google Fonts через `next/font`)
- Макет: Figma, файл «AI_Claude»
- Хостинг: Vercel

## Запуск локально

```bash
npm install
npm run dev
```

Відкрий http://localhost:3000.

## Структура

```
app/          сторінки, layout і глобальні стилі (токени дизайну в globals.css)
components/   Header, Hero, Button, LanguageSwitch
public/       зображення (логотип, фото)
docs/         план сайту та нотатки
```

## Деплой

Репозиторій підключено до Vercel: кожен пуш у `main` автоматично публікує нову версію сайту.
