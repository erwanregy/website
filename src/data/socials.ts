import { ReactNode } from "react"
import { IconType } from "react-icons"
import { RiGithubFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri"

const socials: {
    name: string,
    url: string,
    icon: IconType
}[] = [
    {
        name: "Github",
        url: "https://github.com/erwanregy/",
        icon: RiGithubFill
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erwanregy/",
        icon: RiLinkedinFill
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/erwanregy/",
        icon: RiInstagramLine
    }
]

export default socials
