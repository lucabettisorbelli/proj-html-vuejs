<script>
import MainBottom from './MainBottom.vue';

export default {
    name: 'PageMain',
    components: {
        MainBottom,
    },
    data() {
        return {
            images: [
                {
                    src: 'logoTrimcut.png',
                    title: 'Trim & Cut',
                    subscription: 'Avada Barbers are exsperts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
                },
                {
                    src: 'logoWashdry.png',
                    title: 'Wash & Dry',
                    subscription: 'Take a seat in your leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
                },
                {
                    src: 'logoBeardtrim.png',
                    title: 'Beard Tidy',
                    subscription: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.'
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
    <main>
        <div class="containerMainTop">
            <div class="containerBoxed">
                <div class="boxTitle">
                    <div class="subtitle">
                        <h6>MENS GROOMING</h6>
                    </div>
                    <div class="title">
                        <h1>Services</h1>
                    </div>
                </div>
                <div class="elementsBarber">
                    <div class="element" v-for="element in images">
                        <div class="images">
                            <img :src="getImageUrl(element.src)" alt="">
                        </div>
                        <div class="elementTitle">{{ element.title }}</div>
                        <small class="elementSubtitle">{{ element.subscription }}</small>
                    </div>
                </div>
                <div class="button">
                    <button>READ ABOUT OUR SERVICES</button>
                </div>
            </div>
        </div>

        <div class="containerMainBottom">
            <div class="backgroundImage">
                <img src="../assets/triangle.svg" alt="">
            </div>
            <div class="containerBg">
                <div class="backgroundColor">
                    <div class="containerboxedLarge">
                        <div class="subtitleBottom">
                            <h3>WE HAVE YOU COVERED</h3>
                        </div>
                        <div class="titleBottom">
                            <h1>Avada Gromming Products</h1>
                        </div>
                        <div class="elementsBarbers">
                            <div class="element" v-for="element in images">
                                <div class="images">
                                    <img :src="getImageUrl(element.src)" alt="">
                                </div>
                                <div class="elementTitle">{{ element.title }}</div>
                            </div>
                        </div>
                        <div class="button">
                            <button>SHOP OUR PRODUCT RANGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MainBottom />
    </main>
</template>

<style lang="scss" scoped>
.containerMainTop {
    height: 640px;
}

.containerBoxed {
    height: 100%;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;


    .boxTitle {
        display: flex;
        flex-direction: column;
        align-items: center;

        .subtitle {
            color: #be9359;
        }

        .title {
            color: #b0b0b0;
            padding-top: 10px;
        }
    }
}

.elementsBarber {
    display: flex;
    justify-content: space-between;
    height: 300px;
    width: 100%;
    margin-top: 50px;

    .element {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .images {
            width: 80px;
            height: 120px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .elementTitle {
            color: #be9359;
        }

        .elementSubtitle {
            color: rgba(27, 24, 24, 0.3);
            text-align: center;
        }
    }
}

.button {

    button {
        border: 1px solid #be9359;
        color: #be9359;
        padding: 10px 20px;
        background-color: transparent;
    }
}

.containerMainBottom {
    height: 1000px;

    .backgroundImage {
        filter: brightness(0);
        height: 100px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .containerBg {
        height: 100%;
        background-image: url(../assets/background-main.jpg);
        background-size: cover;
        background-repeat: no-repeat;

        .backgroundColor {
            background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 20%);
            height: 100%;
        }
    }

    .containerboxedLarge {
        height: 100%;
        max-width: 1520px;
        margin: 0 auto;
        color: orange;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .titleBottom {
        color: white;
    }

}

.elementsBarbers {
    color: white;
    display: flex;
    justify-content: space-between;
    height: 300px;
    width: 100%;
    margin-top: 50px;

    .elementTitle {
        color: #be9359;
    }

    .element {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .images {
        width: 80px;
        height: 120px;

        img {
            width: 100%;
            height: 100%;
            filter: invert(100%);
        }
    }

}
</style>