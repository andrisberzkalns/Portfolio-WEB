import React from 'react';
import { Locale } from '../../contexts/localization/LocaleProvider';

export default [
    {
        thumbnailPath: "/img/jdkmarupe.jpg",
        title: "JDK Mārupe",
        subheader: <Locale string={"projects.jdkmarupe.subheader"}/>,
        description: "projects.jdkmarupe.description",
        keywords: ["Laravel (PHP)", "Blade template"],
        buttonLink: "https://www.jdkmarupe.lv/",
        buttonText: <Locale string={"btn.visitSite"}/>
    },
    {
        thumbnailPath: "/img/aribabox.jpg",
        title: "Aribabox",
        subheader: <Locale string={"projects.aribabox.subheader"}/>,
        description: "projects.aribabox.description",
        keywords: ["Shopify (PHP, Liquid)", "Photoshop ExtendScript (JS)"],
        buttonLink: "https://www.aribabox.com/",
        buttonText: <Locale string={"btn.visitSite"}/>
    },
    {
        thumbnailPath: "/img/portfolio.jpg",
        title: "Portfolio",
        subheader: <Locale string={"projects.portfolio.subheader"}/>,
        description: "projects.portfolio.description",
        keywords: ["React (JS)"]
    }
]