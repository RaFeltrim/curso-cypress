describe('Api Adopet', () => {
    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.
    //Você encontrará um cypress.en.json_exemplo para entender como o token deve ser inserido no arquivo cypress.env.json
    // const tempoEsperado = Math.random() * 1000        //flakytest
    // expect(res.duration).to.be.lte(tempoEsperado)     //flakytest      

    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNDMyNWJhNS05ZmEzLTQwZTYtYmY3Ni0xMmE4MDJlN2JhMTUiLCJhZG9wdGVyTmFtZSI6IlJhZmFlbCIsImlhdCI6MTc0NjEyNzkxNSwiZXhwIjoxNzQ2Mzg3MTE1fQ.pyKg3s5l1HlNe5BZOHInEAuephS6BimvYkLfQspAnF0`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/e4325ba5-9fa3-40e6-bf76-12a802e7ba15',
            headers: { authorization }           
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg') 
        })
    })
})