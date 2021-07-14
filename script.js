const decaImg = document.querySelector(".deca");
const debateImg = document.querySelector(".debate");
const chessImg = document.querySelector(".chess");

decaImg.addEventListener("click", function () {
    Swal.fire({
        showCloseButton: true,
        showConfirmButton: false,
        imageUrl: 'https://1000logos.net/wp-content/uploads/2021/04/DECA-logo.png',
        imageWidth: 330,
        imageHeight: 200,
        title: '<b>DECA  2017-2021<b>',
        text: "DECA is a club I was in for the entirety of my time in high school. It is a business club that has chapters worldwide with students competing in regional, provincial, and international competitions every year. During my Grade 12 year I served as the president of my school's chapter, leading a club with over 100 members. I taught lessons, organized events such as the Massey DECA Competition, and planned trips to comeptitions. In addition, I placed within the top 18 in Ontario at the provincial competition 2 years in a row (2020-2021) in my event, Financial Team Decision Making. From meeting new people to traveling, being a part of DECA was one of the most fun and impactful experiences I had in high school.",
        width: 600,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

debateImg.addEventListener("click", function () {
    Swal.fire({
        showCloseButton: true,
        showConfirmButton: false,
        imageUrl: 'debateLogo.png',
        imageWidth: 330,
        imageHeight: 250,
        title: '<b>Debate  2017-2021<b>',
        text: "The Debate Club is another longtime high school club that I joined in Grade 9 and never left. I was never the most outgoing person but debate really helped me find my voice and gave me the confidence to speak publicly. I became a vice-president of the club in Grade 11 and was selected to represent my school at tournaments such as the Odette Debate Competition. I met lots of talented and motivated people through debate and it is one of the experiences that has shaped who I am today.",
        width: 600,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }

    })
})

chessImg.addEventListener("click", function () {
    Swal.fire({
        showCloseButton: true,
        showConfirmButton: false,
        imageUrl: 'https://media.istockphoto.com/vectors/vector-chess-pieces-team-isolated-on-white-silhouettes-of-chess-vector-id946495138?k=6&m=946495138&s=612x612&w=0&h=QBjPmREFCqfEM0Tw-bizel-liYuk8Umf5eRNbz-bOhg=',
        imageWidth: 350,
        imageHeight: 230,
        title: '<b>Chess  2014-2021<b>',
        text: "I have been playing chess competitively for over 7 years. Since I was in Grade 5 I have competed in school, regional, provincial, and national tournaments, scoring within the top 20 for my age group in 2016. I joined the Massey Chess Club in Grade 9 and competed in the Ontario High School Chess Challenge two times winning 1st as a school both years as well as individual section and age group medals. I met lots of my clsoest friends and mentors through the chess community and created everlasting memories as well. ",
        width: 600,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }

    })
})
