import { TextStyle, Platform } from "react-native"
import * as Colors from "./colors"

type FontSize = "title" | "titleSmall" | "regular"
export const fontSize: Record<FontSize, TextStyle> = {
  title: {
    fontSize: 24,
  },
  titleSmall: {
    fontSize: 20,
  },
  regular: {
    fontSize: 14,
  },
}

type FontWeight = "regular" | "semibold" | "bold"
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    fontWeight: "normal"
  },
  semibold: {
    fontWeight: "500"
  },
  bold: {
    fontWeight: "bold"
  },
}

type Header = "header" | "headerBold" | "headerSmall"
export const header: Record<Header, TextStyle> = {
  header: {
    ...fontSize.title,
    color: Colors.primary.titleColor,
  },
  headerBold: {
    ...fontSize.title,
    ...fontWeight.bold,
    color: Colors.primary.titleColor,
  },
  headerSmall: {
    ...fontSize.titleSmall,
    ...fontWeight.bold,
    color: Colors.primary.titleColor,
  },
}

type Body = "regular" | "bold"
export const body: Record<Body, TextStyle> = {
  regular: {
    ...fontSize.regular,
    color: Colors.primary.fontColor,
  },
  bold: {
    ...fontSize.regular,
    ...fontWeight.bold,
    color: Colors.primary.fontColor,
  },
}

const monospaceFontFamily = Platform.select({
  ios: "Menlo",
  android: "Roboto",
})

type Monospace = "base"
export const monospace: Record<Monospace, TextStyle> = {
  base: {
    fontFamily: monospaceFontFamily,
  },
}