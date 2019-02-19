'use strict'
const CRoyale = require('croyale');
const client = new CRoyale.Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ0MCwiaWRlbiI6IjM2NTU5NTM1NTg1MDYwNDU1NSIsIm1kIjp7fSwidHMiOjE1MzM5MTk4MTAzODh9.pP960WHJcU-Cv3IRa090VkpT7bPfu422GffYM5IN2-k');
class ClanController {
    async index({view}){
        const Clan = use('App/Models/Clan')
        var data = await client.getClan('90LLLPUP')
        var string = JSON.stringify(data)
        var convertido = JSON.parse(string)
        const clan = new Clan()
        clan.nome = convertido.name;
        clan.trofeus = convertido.score;
        clan.doacoes = convertido.donations;
        await clan.save();

        return view.render('inicio',{dados : convertido})
    }
    async membros({view}){
        var data = await client.getClan('90LLLPUP')
        var string = JSON.stringify(data)
        var convertido = JSON.parse(string)
        return view.render('membros',{dados : convertido.members})
    }
    async info({view, params}){
        var data = await client.getPlayer(`${params.tag}`)
        var string = JSON.stringify(data)
        var convertido = JSON.parse(string)
        return view.render('membro',{dados : convertido})
    }
}

module.exports = ClanController
