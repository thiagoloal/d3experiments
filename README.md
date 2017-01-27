![The Boilerplate](http://gitlab.corp.folha.com.br/uploads/project/avatar/2920/63811.png)

# Boilerplate Graphics Special

O Boilerplate Graphics Special é um chassis (ou clichê) para páginas especiais para o site da Folha

Inspirado em vários boilerplates da imprensa estrangeira.  I S2

## Recursos

- [BrowserSync](http://www.browsersync.io/)
- Template usando [Pug](http://www.pugjs.org/)
- Gerenciador de tarefas [Gulp](http://gulpjs.com/)
- Compilar ES2015+ para navegadores antigos [Webpack](http://webpack.github.io)
- Pré-processador de CSS [Stylus](//stylus-lang.com)
- [Post CSS](https://github.com/seaneking/poststylus) torna o CSS acessível em JavaScript possibilitando uma infinidade de plugins e ferramentas personalizadas
- [Autoprefixer]() serve para adicionar ou remover prefixos dependendo dos navegadores que você precisa dar suporte.
- [CSSNano]() mais poderoso minifier de CSS do mercado; remove espacos em branco, remove estilos duplicados, sim
- [CSS-Mqpacker]() Serve para juntar todos os media-queries iguais num único media-queries
- [Lost Grid]() gerador de grid
- [Flexibility]() Melhor fallback para flexbox o flexibility.js com suporte a partir do IE8
- [Rupture](http://jescalan.github.io/rupture/) é um conjunto de mixins feito para facilitar a vida na hora de trabalhar com media-queries
- [pym.js](http://blog.apps.npr.org/pym.js/) included by default for easy embedding in hostile CMS environments

## Estrutura de pastas e pastas

		.
		├── public																# Arquivos prontos para publicação
		|		├── titulo-do-projeto
		|		|		├── css
		|		|		├── js
		|		|		├── json
		|		|		├── images
		|		|		└── *.html
		├── docs																	# Documentação
		├── gulp																	# Tarefas do gulpfile
		├── src																		# Arquivos editáveis
		|		├── assets
		|		|		├── style
		|		|		|		├── components
		|		|		|		|		└── *.styl
		|		|		|		├── layout
		|		|		|		|		└── *.styl
		|		|		|		└── main-titulo-do-projeto.styl
		│		│		├── json
		|		|		├── images
		|		|		|		├── components
		|		|		|		|		└── **galeria**
		|		|		|		|		|		└── *.{png, jpg, gif}
		|		|		└── script
		|		|		|		├── components
		|		|		|		|		└── *.js
		|		|		|		└── main-titulo-do-projeto.js
		|		└── templates
		|		|		├── data													# Conteúdo para as páginas
		|		|		|		└── *.json
		|		|		├── pages													# Páginas em html
		|		|		|		└── *.pug
		|		|		├── layouts												# Layouts a serem usados
		|		|		|		└── *.pug
		|		|		├── includes											# Páginas que serão inseridas no html, como topo, rodapé, head, etc
		|		|		|		└── *.pug
		├── tools																	# Ferramentas e utilitários
		├── node_modules													# Vendors e componentes de terceiros
		├── meta.json															# Informações para as meta tags, descrition, keywords, image, title, etc
		├── data.json															# Conteúdo da página
		└── README.md															# Instruções e afins


## Começar
### Pré requistos

### Homebrew
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Node v6.9.1 - [Link](https://nodejs.org)
```sh
brew doctor
brew update
brew install node
```
#### YARN
```sh
brew install yarn
```

O Yarn é mais rápido do que o NPM, mas tanto faz o uso.

#### GULP CLI
```sh
sudo yarn global add gulp-cli
```

#### ESLINT
```sh
sudo yarn global add eslint
```

#### STYLUS
```sh
sudo yarn global add stylus
```

#### GULP CLI
```sh
sudo yarn global add webpack
```

## Publicação

Para compilar os arquivos minificados na versão de produção:

```sh
gulp clean && gulp --env production
```

## Ativos

## Comando disponíveis

## TODO
