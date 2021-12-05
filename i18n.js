const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const nextI18n = new NextI18Next({
    defaultLanguage: 'uz',
    otherLanguages: ['ru', 'uzc', 'kaa', 'uz'],
    localeSubpaths,
    localePath: path.resolve('./public/translation'),
    detection: {
        lookupCookie: 'next-i18next',
        order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    browserLanguageDetection: false,
    serverLanguageDetection: false,
})
module.exports = nextI18n
exports.i18n = nextI18n.i18n
