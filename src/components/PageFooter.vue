<script>

</script>
<template>
    <footer>
        <div class="containerBg">
            <div class="containerBoxed">
                <div class="iconsLeft">
                    <div id="imageLeft">
                        <img src="../assets/img-footer.png" alt="">
                    </div>
                    <div id="iconLeft">
                        <button>SHOP OUR RANGE NOW</button>
                    </div>
                </div>
                <div class="iconsCentral">
                    <div id="logo">
                        <img src="../assets/logo-footer.png" alt="">
                    </div>
                    <div id="info">
                        <span>Avada Barbers</span>
                        <span>123 New York Street</span>
                        <span>New York City</span>
                        <span>Info@yourwebsite.com</span>
                        <span>1(555) 555-1212</span>
                    </div>
                    <div id="follow">
                        <span>FOLLOW US</span>
                    </div>
                    <div id="social">
                        <span><font-awesome-icon :icon="['fab', 'facebook']" /></span>
                        <span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
                        <span><font-awesome-icon :icon="['fab', 'youtube']" /></span>
                        <span><font-awesome-icon :icon="['fab', 'instagram']" /></span>
                    </div>
                </div>
                <div class="iconsRigth">
                    <div id="imageRigth">
                        <img src="../assets/image-footer.png" alt="">
                    </div>
                    <div id="iconRigth">
                        <button>BOOK YOUR APPOINTMENT</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.containerBg {
    background-color: #121314;
    height: 630px;
    display: flex;
    align-items: center;
    justify-content: center;

    .containerBoxed {
        max-width: 1150px;
        margin: 0 auto;
        display: flex;

        .iconsLeft {
            height: 380px;
            width: calc(100% / 3);

            #imageLeft {
                height: 80%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            #iconLeft {
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;

                button {
                    border: 1px solid #006D77;
                    color: #006D77;
                    padding: 10px 20px;
                    background-color: transparent;

                    &:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                }
            }
        }

        .iconsCentral {
            height: 380px;
            width: calc(100% / 3);

            #logo {
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #info {
                height: 40%;
                color: #b0b0b0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #follow {
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #006D77;
            }

            #social {
                height: 20%;
                color: #b0b0b0;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    padding: 5px;
                }
            }
        }

        .iconsRigth {
            height: 380px;
            width: calc(100% / 3);

            #imageRigth {
                height: 80%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            #iconRigth {
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;

                button {
                    border: 1px solid #006D77;
                    color: #006D77;
                    padding: 10px 20px;
                    background-color: transparent;

                    &:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>