import Clipboard from "clipboard";

export const copyElementValue = (element: HTMLElement) => {
  element.style.cssText += ";cursor: pointer"
  console.log(element.style.cssText)
  const ClipboardElement = new Clipboard(element, {
    text: () => element.innerHTML || element.innerText
  });
  ClipboardElement.on('success', () => {
    ClipboardElement.destroy()
  }),
  ClipboardElement.on('error', () => {
    ClipboardElement.destroy()
  })
  element.click()
}