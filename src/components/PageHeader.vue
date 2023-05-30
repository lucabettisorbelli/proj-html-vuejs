<script>

</script>

<template>
    <header>
        <div class="containerImage">
            <div class="containerBoxed">
                <div class="navbar">
                    <div class="imgLogo">
                        <img src="../assets/avadabarbers-logo-x2-200x70.png" alt="">
                    </div>
                    <div class="icons">
                        <span><font-awesome-icon icon="shopping-cart" /></span>
                        <span><font-awesome-icon icon="bars" /></span>
                    </div>
                </div>
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
                    <div class="boxImage"></div>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.containerImage {
    height: 970px;
    background-image: url(../assets/avadabarbers-homepage-hero-bg.jpg);

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

            span {
                padding: 1rem;
            }
        }

        .centralBox {
            display: flex;
            justify-content: space-between;
        }

        .elementsText {
            color: white;
            margin-top: 10rem;

            .boxTitle h1 {
                font-size: 5em;
                margin-bottom: 1.5rem;
            }

            .line {
                width: 40%;
                border: 1px solid orange;
            }

            .subtitle h4 {
                color: rgba(211, 211, 211, 0.3);
                margin-top: 1.5rem;
            }

            .button {
                button {
                    border: 1px solid orange;
                    color: orange;
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
</style>