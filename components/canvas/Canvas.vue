<script lang="ts" setup>
import { fabric } from "fabric";
import { ref, onMounted, defineExpose } from "vue";
const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvas = <fabric.Canvas | null>null;

const width = ref(0);
const height = ref(0);
const ready = ref<boolean>(false);

const deleteIcon =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var deleteImg = document.createElement("img");
deleteImg.src = deleteIcon;

function deleteObject(eventData: MouseEvent, transformData: fabric.Transform): boolean {
  const canvas = transformData.target.canvas;

  if (canvas) {
    canvas.remove(transformData.target);
    canvas.requestRenderAll();
  }
  return true;
}

function renderIcon(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: fabric.Object
) {
  const size = 24; // Размер иконки
  ctx.drawImage(deleteImg, left - size / 2, top - size / 2, size, size);
}

const addImg = (url: string) => {
  fabric.Image.fromURL(url, (img: fabric.Image) => {
    const targetWidth = width.value / 2;
    const targetHeight = height.value / 2;

    img.scaleToWidth(targetWidth);
    img.scaleToHeight(targetHeight);

    img.set({
      left: (canvas?.width! - targetWidth) / 2,
      top: (canvas?.height! - targetHeight) / 2,
      originX: "center",
      originY: "center",
      selectable: true, // Включаем возможность выбора
      hasControls: true, // Включаем возможность управления
    });

    img.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,

      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: renderIcon,
    });

    canvas?.add(img);
    canvas?.setActiveObject(img);
  });
};

const addText = ({
  text,
  fontSize,
  fontWeight,
  color,
  font,
  align,
  lineHeight,
  letterSpacing,
}: any) => {
  if (canvas) {
    const textObj = new fabric.Text(text, {
      left: canvas.width! / 2,
      top: canvas.height! / 2,
      originX: "center",
      originY: "center",
      fontSize: +fontSize || 24,
      fontFamily: font || "Magnet",
      fill: color || "black",
      fontWeight: fontWeight || "normal",
      lineHeight: lineHeight || 1,
      textAlign: align || "left",
      charSpacing: letterSpacing ? letterSpacing * 100 : 0,
    });
    canvas.add(textObj);
  }
};

const initCanvas = () => {
  if (!canvasRef.value) return;
  canvas = new fabric.Canvas(canvasRef.value);
  canvas.selection = true;
};

onMounted(async () => {
  const cont = document.querySelector(".canvas-wrapper");
  const rect = cont!.getBoundingClientRect();
  width.value = rect.width;
  height.value = rect.height;
  ready.value = true;
  await nextTick();

  setTimeout(() => {
    initCanvas();
  }, 1000);
});

defineExpose({
  addImg,
  addText,
});
</script>

<template>
  <div class="canvas-wrapper">
    <canvas ref="canvasRef" id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/components" as *;

.canvas-wrapper {
  border: 1px dashed $primary-black-300;
  position: relative;
  width: 40% !important;
  height: auto !important;
  aspect-ratio: 2/3;
  left: 51%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
