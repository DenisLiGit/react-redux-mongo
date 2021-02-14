const axios = require('axios')
const cheerio = require('cheerio')
const Serial = require('../models/Ser')
const Statistic = require('../models/Statistic')

const coreUrl = 'https://kino.mail.ru/'
const url = 'https://kino.mail.ru/series/total/?genre_id=149&genre_id=150&genre_id=157&genre_id=147&genre_id=148&order=newest&year=2020&year=2021'

const setSerial = function () {
    console.log('serial scrap start')
    try {
        axios.get(url)
            .then(response =>
                setSerial(getData(response.data))
            )
            .catch(error => {
                console.log('error', error)
            })

        const getData = (html) => {
            let data = []
            const $ = cheerio.load(html)
            $('.cols__inner .cols__wrapper .cols__column').each((index, elem) => {
                data.push({
                    title: $(elem).find('.p-itemevent-small__info').eq(0).find('span').eq(0).text(),
                    genre: $(elem).find('.p-itemevent-small__info').eq(0).find('div').text(),
                    desciption: '-',
                    link: `${coreUrl}${$(elem).find('.p-itemevent-small__info').eq(0).find('span').eq(0).find('a').attr('href')}`
                })
            })
            return data
        }
    } catch (e) {
        console.log('error', e)
    }

    const setSerial = async (data) => {
        try {
            let recent = 0

            data.map(async (item) => {
                let candidateUpdate = false

                try {
                    const candidate = await Serial.findOne({title: item.title})
                    if (candidate) {
                        if (candidate.description !== item.description) {
                            candidate.description = item.description
                            candidateUpdate = true
                        } else if (candidate.link !== item.link) {
                            candidate.link = item.link
                            candidateUpdate = true
                        } else if (candidate.genre !== item.genre) {
                            candidate.genre = item.genre
                            candidateUpdate = true
                        } else {
                            return null
                        }
                    }

                    if (candidateUpdate) {
                        candidate.save()
                    } else {
                        recent++
                        const serial = new Serial(item)
                        serial.save()
                    }
                } catch (e) {
                    console.log('error', e)
                }
            })

            const stat = await Statistic.findOne({id: 1})
            stat.recentSerial += recent
            await stat.save()
        } catch (e) {
            console.log('error', e)
        }
    }
}

module.exports = setSerial