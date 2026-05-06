# 📅 Cómo publicar eventos en la landig/calendario del portal miembros/lider.

Cada vez que agregues o modifiques un evento en `eventos.html`,
también tenés que actualizar `eventos.json` en la raíz del repo.

👉 Este archivo es el que consume automáticamente el portal de miembros.

---

## 🧾 Formato de `eventos.json`

```json
[
  {
    "id": "evt-nombre-corto-año",
    "title": "Nombre del evento",
    "description": "Descripción opcional (puede quedar vacío: \"\")",
    "starts_at": "2026-06-19T19:00:00-03:00",
    "ends_at": "2026-06-20T23:59:00-03:00",
    "location": "Lugar del evento",
    "type": "special",
    "contact_url": "https://wa.me/..."
  }
]
```

---

## 📌 Campos

| Campo         | Obligatorio | Descripción                                                     |
| ------------- | ----------- | --------------------------------------------------------------- |
| `id`          | ✅ Sí        | Identificador único. Usar formato `evt-nombre-año`. No repetir. |
| `title`       | ✅ Sí        | Nombre del evento tal como aparece en la web.                   |
| `description` | ❌ No        | Puede quedar vacío `""` si no hay descripción.                  |
| `starts_at`   | ✅ Sí        | Fecha y hora en formato ISO 8601 con zona `-03:00`.             |
| `ends_at`     | ❌ No        | Para eventos de varios días usar `23:59` del último día.        |
| `location`    | ❌ No        | Lugar físico del evento.                                        |
| `type`        | ✅ Sí        | Tipo de evento (ver tabla abajo).                               |
| `contact_url` | ❌ No        | Link de WhatsApp o formulario.                                  |

---

## 🏷 Tipos de evento (`type`)

| Valor      | Uso                      |
| ---------- | ------------------------ |
| `general`  | Culto o servicio regular |
| `special`  | Eventos especiales       |
| `youth`    | Jóvenes                  |
| `worship`  | Adoración                |
| `missions` | Misionero                |
| `training` | Formación / liderazgo    |

---

## 🕒 Formato de fechas

```
YYYY-MM-DDTHH:MM:SS-03:00
```

⚠️ Siempre usar `-03:00` (Argentina)

### Ejemplos

```
"2026-05-18T19:30:00-03:00"
"2026-06-05T00:00:00-03:00"
"2026-06-14T23:59:00-03:00"
```

---

## 🔄 Workflow

1. Editar `eventos.html`
2. Actualizar `eventos.json`
3. Commit:

```bash
git add eventos.html eventos.json
git commit -m "feat: agregar evento Nombre del Evento"
git push
```

---

## ⚡ Actualización

* GitHub Pages: 1–2 min
* Portal: hasta 1 hora (cache)

---

## 🧹 Limpieza

Recomendado eliminar eventos pasados del JSON (aunque el portal ya los filtra).

---

## 💡 Buenas prácticas

* IDs únicos (`evt-retiro-2026`)
* No duplicar eventos
* Revisar fechas
* Mantener consistencia

---

## 🚀 Resumen

* `eventos.html` → visual
* `eventos.json` → datos

👉 **Siempre actualizar ambos**
