<script>
export default {
    props: ['menuItems'],
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<template>
    <header>
        <div class="containerImage">
            <div class="containerBoxed">
                <!-- navbar -->
                <div class="navbar">
                    <div class="imgLogo">
                        <img src="../assets/avadabarbers-logo-x2-200x70.png" alt="">
                    </div>
                    <div class="icons">
                        <span><font-awesome-icon icon="shopping-cart" /></span>
                        <span @click="toggleMenu"><font-awesome-icon icon="bars" /></span>
                    </div>
                    <!-- dropdown -->
                    <div v-if="isMenuOpen" class="dropdownMenu">
                        <ul>
                            <li v-for="item in menuItems">{{ item }}</li>
                        </ul>
                    </div>
                </div>
                <!-- elementi testuali -->
                <div class="centralBox">
                    <div class="elementsText">
                        <div class="boxTitle">
                            <h1>Barber Shop</h1>
                        </div>
                        <div class="line"></div>
                        <div class="subtitle">
                            <h4>The Pinnale of Male Gronning</h4>
                        </div>
                        <div class="button">
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                    <!-- immagine barbiere -->
                    <div class="boxImage"></div>
                </div>
            </div>
        </div>
        <!-- pro barbers -->
        <div class="backgroundImage">
            <div class="textPro">
                <div class="awardBox">
                    <h4>Award Winning</h4>
                </div>
                <div class="proBox">
                    <h1>Pro Barbers</h1>
                </div>
                <div class="buttonBox">
                    <button>MEET YOUR NEW BARBER</button>
                </div>
            </div>
        </div>
        <div class="backgroundTriangle">
            <div class="color">
                <img src="../assets/triangle.svg" alt="">
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.containerImage {
    height: 970px;
    background-image: url(../assets/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;


    .containerBoxed {
        max-width: 1150px;
        margin: 0 auto;

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .icons {
            color: white;
            position: relative;

            span {
                padding: 1rem;
            }
        }

        .centralBox {
            display: flex;
            justify-content: space-between;
        }

        .dropdownMenu {
            color: white;
            text-align: end;
            position: absolute;
            top: 90px;
            right: 10%;
            background-color: rgba(70, 70, 70, 0.3);
            width: 150px;

            ul {
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                list-style: none;

                li:hover {
                    color: #be9359;
                    cursor: pointer;
                }
            }
        }

        .elementsText {
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .boxTitle h1 {
                font-size: 5em;
                margin-bottom: 1.5rem;
            }

            .line {
                width: 200px;
                border: 1px solid #be9359;
            }

            .subtitle h4 {
                color: rgba(211, 211, 211, 0.3);
                margin-top: 1.5rem;
            }

            .button {
                button {
                    border: 1px solid #be9359;
                    color: #be9359;
                    padding: 10px 20px;
                    margin-top: 1.5rem;
                    background-color: transparent;
                }
            }
        }

        .boxImage {
            height: 780px;
            width: 520px;
            background-image: url(../assets/avadabarbers_hero_focalmirror-400x550.png);
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
}

.backgroundImage {
    background-image: url(../assets/avadabarbers-about-introbackground.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .textPro {
        padding-bottom: 30px;
        text-align: center;

        .awardBox {
            color: #be9359;
            padding-top: 70px;
        }

        .proBox {
            color: white;
            padding-top: 20px;
        }

        .buttonBox {
            padding: 20px;

            button {
                border: 1px solid #be9359;
                color: #be9359;
                padding: 10px 20px;
                background-color: transparent;
            }
        }
    }

}

.backgroundTriangle {
    background-image: url(../assets/avadabarbers-about-introbackground.jpg);
    background-size: cover;
    background-color: black;
    background-repeat: no-repeat;
    height: 100px;

    .color {
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%);

        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>