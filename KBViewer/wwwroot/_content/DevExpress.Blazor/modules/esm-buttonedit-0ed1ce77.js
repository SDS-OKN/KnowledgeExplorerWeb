function t(t,e){var n=window.getComputedStyle(t).fontSize,o=.6*Number(n.substring(0,n.length-2));return t.style.paddingRight=e.offsetWidth+o+"px",Promise.resolve("ok")}const e={CalculateInputRightPadding:t};export default e;export{t as CalculateInputRightPadding};
