        function generateCard(bin) {
            var bin2 = "";
            var bin2_l = [];
            var card = "";
            var card1_l = [];
            var card2_l = [];
            var sum = 0;
            var mod = 0;
            var check_sum = 0;
            for (var i in bin) {
                char = bin[i].toLowerCase();
                if (char == "x") {
                    var rand_num = Math.floor(Math.random() * 10);
                    char = rand_num;
                }
                bin2 += char;
            }
            for (var i in bin2) {
                bin2_l.push(parseInt(bin2[i]))
            }
            
            for (var i in bin2_l) {
                card1_l.push(bin2_l[i]);
                card2_l.push(bin2_l[i]);
            }
            
            for (var i = 0; i < 15 - bin.length; i++) {
                var rand_num = Math.floor(Math.random() * 10);
                card1_l.push(rand_num);
                card2_l.push(rand_num);
            }
            
            for (var i = 0; i < card2_l.length; i += 2) {
                card2_l[i] *= 2;
            }
            
            for (var i in card2_l) {
                if (card2_l[i] > 9) {
                    card2_l[i] -= 9;
                }
            }

            for (var i in card2_l) {
                sum += card2_l[i];
            }
            mod = sum % 10;
            if (!mod == 0) {
                check_sum = 10 - mod;
            }
            card1_l.push(check_sum);
            for (var i in card1_l) {
                card += card1_l[i];
            }
            return card;
        }

        function generateMonth() {
            var monthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            var rand_num = Math.floor(Math.random() * 12);
            return monthList[rand_num];
        }

        function generateYear() {
            var yearList = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
            var rand_num = Math.floor(Math.random() * 10);
            return yearList[rand_num];
        }

        function generateBIN() {
            var generatedBIN = "";
            for (var i = 0; i < 3; i++) {
                var rand_num = Math.floor(Math.random() * 10);
                generatedBIN += rand_num;
            }
            return generatedBIN;
        }

        function generate() {
            var bin = document.getElementById("bin");
            var cvc = document.getElementById("cvc");
            var month = document.getElementById("month");
            var year = document.getElementById("year");
            var quantity = document.getElementById("quantity");
            var result = document.getElementById("result");

            var binCode = ["4","5"];

            var binValue = bin.value.trim();
            var ccvValue = cvc.value.trim();
            var monthValue = month.value;
            var yearValue = year.value;
            var quantityValue = quantity.value.trim();

            if (binValue == "") {
                binRandom = Math.floor(Math.random() * 2);
                binValue = binCode[binRandom];
            }
            if (ccvValue == "") {
                ccvValue = "random";
            }
            if (quantityValue == "") {
                quantityValue = 10;
            }
            var cards = "";
            for (var i = 0; i < quantityValue; i++) {
                var generatedCard = generateCard(binValue);
                var generatedMonth = generateMonth();
                var generatedYear = generateYear();
                var generatedBIN = generateBIN();
                if (monthValue != "random") {
                    generatedMonth = monthValue;
                }
                if (yearValue != "random") {
                    generatedYear = yearValue;
                }
                if (ccvValue != "random") {
                    generatedBIN = ccvValue;
                }
                cards += `${generatedCard}|${generatedMonth}|${generatedYear}|${generatedBIN}\n`;
            }
            result.value = cards.trim();
        }


        function copyToClipboard() {
            var copyText = document.getElementById("result");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            // alert("copied: " + copyText.value);
}
