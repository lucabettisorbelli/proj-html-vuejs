<script>
export default {
    name: 'MainBottom',
    data() {
        return {
            cards: [
                {
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum qui illo harum ad praesentium error blanditiis exercitationem ea quasi dolor porro repudiandae esse ex dolorum',
                    img: 'small-image-1.jpg',
                    name: 'John Doe',
                },
                {
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum qui illo harum ad praesentium error blanditiis exercitationem ea quasi dolor porro repudiandae esse ex dolorum',
                    img: 'small-image-2.jpg',
                    name: 'Pete Johns',
                },
                {
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum qui illo harum ad praesentium error blanditiis exercitationem ea quasi dolor porro repudiandae esse ex dolorum',
                    img: 'small-image-3.jpg',
                    name: 'Mark Wilson',
                }
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="cardImage">
            <img src="../assets/newImage.png" alt="">
        </div>
        <div class="cardText">
            <div class="subtitle">
                <h3>THIS MOUNT FEATURING PRODUCTS</h3>
            </div>
            <div class="title">
                <h1>Shaving Butter </h1>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum qui illo harum ad praesentium
                    error blanditiis exercitationem ea quasi dolor porro repudiandae esse ex dolorum, aliquam autem enim
                    accusantium.</p>
            </div>
            <div class="button">
                <button>BUY NOW</button>
            </div>
        </div>
    </div>

    <div class="boxFeed">
        <div class="boxText">
            <div class="subtitle">
                <h4>WHAT PEOPLE SAY</h4>
            </div>
            <div class="review">
                <h1>Rewiew</h1>
            </div>
        </div>
        <div class="boxCards">
            <div v-for="card in cards" class="cards">
                <span class="paragraph">{{ card.paragraph }}</span>
                <div class="image">
                    <img :src="getImageUrl(card.img)" alt="">
                </div>
                <span class="name"> {{ card.name }}</span>
            </div>
        </div>
    </div>

    <div class="containerMainBottom">
        <div class="backgroundImage">
            <img src="../assets/triangle.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    max-width: 1150px;
    height: 450px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    border-top: 1px solid #be9359;

    .cardImage {
        background-image: url(../assets/bg-color.jpg);
        background-size: cover;
        filter: grayscale(50);
        width: 450px;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 70%;
            height: 70%;
        }
    }

    .cardText {
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
        background-color: black;

        .subtitle {
            color: #be9359;
        }

        .title {
            color: white;
        }

        .text {
            color: #b0b0b0;
        }

        .button {
            button {
                border: 1px solid #be9359;
                color: #be9359;
                padding: 10px 20px;
                background-color: transparent;
            }
        }
    }
}

.boxFeed {
    max-width: 1150px;
    margin: 0 auto;
    height: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    .boxText {
        display: flex;
        flex-direction: column;
        align-items: center;

        .subtitle {
            color: #be9359;
            padding-bottom: 10px;
        }

        .review {
            color: #b0b0b0;
        }
    }

    .boxCards {
        display: flex;

        .cards {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 250px;
            padding: 0px 30px;

            .paragraph {
                text-align: center;
                color: #b0b0b0;
            }

            .image {
                width: 100px;
                height: 100px;

                img {
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            }

            .name {
                color: #be9359;
            }
        }
    }
}

.containerMainBottom {
    height: 970px;
    background-color: #f5f5f5;

    .backgroundImage {
        height: 100px;

        img {
            width: 100%;
            height: 100%;
            transform: scale(-1);
        }
    }
}
</style>