        const caps = document.querySelectorAll('.cap');
        const ball = document.getElementById('ball');
        const correct = document.getElementById('correct');
        const incorrect = document.getElementById('incorrect');
        const resultField = document.getElementById('result');
        let positionBall;
        let score = 0;
        let flag = false;

        resultField.value = 0;

        function capSize() {
            let heightCap = document.getElementById('heightN').value;
            let widthCap = document.getElementById('widthN').value;

            if (heightCap === '' || widthCap === '' || parseInt(heightCap) > 600 ||parseInt(widthCap) > 600 ) {
                alert("Введены недопустимые размеры!");
                return null;
            }

            for (i = 0; i < 3; i++) {
                caps[i].style.width = widthCap + 'px';
                caps[i].style.height = heightCap + 'px';
            }

            return { heightCap, widthCap };
        }

        function ballSize(heightCap, widthCap) {
            let diameter = document.getElementById('diameter').value;
        
            flag = false;
        
            if (diameter === '') {
                alert("Диаметр шара отсутствует!");
                flag = true;
                return;
            }
        
            if (isNaN(diameter) || diameter <= 0) {
                alert("Диаметр должен быть положительным числом!");
                flag = true;
                return;
            }
        
            if (parseInt(diameter) > parseInt(widthCap)) {
                flag = true;
                alert("Диаметр шара больше ширины напёрстка!");
            } else if (parseInt(diameter) > parseInt(heightCap)) {
                flag = true;
                alert("Диаметр шара больше высоты напёрстка!");
            } else {
                ball.style.width = diameter + 'px';
                ball.style.height = diameter + 'px';
            }
        }
        

        caps.forEach(cap => {
            cap.addEventListener('click', function (event) {
                caps[positionBall].appendChild(ball);
                this.querySelector('img').style.transform = `translatey(${parseInt(ball.offsetWidth) * (-1) - 20 + 'px'})`;
                if (this == caps[positionBall]) {
                    correct.style.opacity = 1;
                    score++;
                } else {
                    score--;
                    incorrect.style.opacity = 1;
                }
                resultField.value = score;
                setTimeout(reset, 800);
            });
        });

        function save() {
            const capSizes = capSize();
            if (capSizes === null) {
                return;
            }

            const { heightCap, widthCap } = capSizes;
            ballSize(heightCap, widthCap);

            if (flag) {
                return location.reload();
            }

            change_ball();
            return false;
        }

        function reset() {
            correct.style.opacity = 0;
            incorrect.style.opacity = 0;
            change_ball();
        }

        function change_ball() {
            for (i = 0; i < 3; i++)
                caps[i].querySelector('img').style.transform = '';
            positionBall = Math.floor(Math.random() * 3);
        }

        change_ball();

        function refresh() {
            location.reload();
        }