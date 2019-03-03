# PdfWorker

## Preview

![IMAGE](https://github.com/bguillou/pdfWorker/blob/master/description.gif)

## Start
```bash
  yarn
  yarn start
```

## How Use

- POST URL of PDF file on http://localhost:8000 like this: 

```js
{
  url: 'your_pdf_url.pdf'
}
```

- and receive a ReadableStream

```text
    data:image/svg...data:image/svg...
```

## Exemple
- [pdfViewer react](https://github.com/bguillou/pdfViewer)
