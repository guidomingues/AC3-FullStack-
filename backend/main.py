from flask import Flask # Importa a biblioteca
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__) # Inicializa a aplicação
CORS(app)


pessoas = [
    {
        "nome":"Alexia Vitoria Melhado Pereira",
        "idade": 21,
        "profissao": "Desenvolvedora VueJS Jr."
    },
    {
        "nome":"Adelmir Neves Ferreira Junior",
        "idade": 23,
        "profissao": "Analista de suporte Jr."
    },
    {
        "nome":"Julia Melhado Pereira",
        "idade": 25,
        "profissao": "Empresaria"
    },
]


@app.route('/People', methods=["GET"]) 
def getAllPeople():
    return jsonify(pessoas);



if __name__ == '__main__':
  app.run(debug=True) 
