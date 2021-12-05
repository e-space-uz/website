const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const withImages = require('next-images')

const localeSubpaths = {
    uzc: 'uzc',
    kaa: 'kaa',
    ru: 'ru',
}
module.exports = withBundleAnalyzer(
    withImages({
        env: {
            BASE_URL: 'https://api.admin.api.e-space.javelin.uz/v1',
            MAPBOX_TOKEN:
                'pk.eyJ1IjoiYWxnb3NkZXYiLCJhIjoiY2tydmtndnZhMDdodDJ3cnY2d2xyM25iayJ9.MQntLXZai3HeMrHo7I-hAA',
            COORDINATES_ID: '6113589b73bf6fe15aaef566',
            FEATURE_TYPE_ID: '6113590973bf6fe15aaef567',
            AREA_ID: '611359b073bf6fe15aaef568',
            MAP_PROPERTY_ID: '60ee8a78c30b719d5f4e4687',
        },
        publicRuntimeConfig: {
            localeSubpaths,
        },
        rewrites: async () => nextI18NextRewrites(localeSubpaths),
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            })
            return config
        },
    }),
)
