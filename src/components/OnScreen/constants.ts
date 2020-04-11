export const animate = {
  opacity: 1,
  y: 0,
  transition: {
    type: "spring",
    damping: 300
  }
}

export const initial = {
  opacity: 0,
  y: "200%",
  transition: {
    type: "spring",
    damping: 300
  }
}

export const exit = {
  opacity: 0,
  y: 0,
  transition: {
    type: "spring",
    damping: 300
  }
}