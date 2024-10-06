import { useState } from 'react'

export default function ArticleForm() {
  const [newId, setNewId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [msg, setMsg] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    fetch('/api/article', { method: form.method, body: formData })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json()
          return data.msg
        }
        const data_1 = await res.json()
        return `${data_1.id}:${data_1.title}の登録が完了しました。`
      })
      .then((msg) => {
        setMsg(msg)
      })
  }
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div>
        <label>
          {' '}
          Id:
          <input
            type="number"
            name="id"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {' '}
          Title:
          <input
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: 'red' }}>{msg}</div>
    </form>
  )
}
