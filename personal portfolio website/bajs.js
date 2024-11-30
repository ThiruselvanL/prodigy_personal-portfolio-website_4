function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight && height) {
        // Convert height from cm to meters
        height = height / 100;

        // Calculate BMI
        let bmi = weight / (height * height);
        bmi = bmi.toFixed(2);

        // Display BMI
        document.getElementById('bmi-value').innerHTML = `Your BMI is: ${bmi}`;

        // Suggest diet and weight goal
        let weightGoal, dietPlan = '';
        if (bmi < 18.5) {
            weightGoal = `You need to gain ${(18.5 * height * height - weight).toFixed(1)} kg to reach a normal BMI.`;
            dietPlan = 'High-calorie diet for weight gain: Increase protein and carb intake.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            weightGoal = 'You have a normal weight. Maintain your current weight!';
            dietPlan = 'Balanced diet: Maintain a healthy mix of protein, carbs, and fats.';
        } else {
            let weightToLose = (weight - 24.9 * height * height).toFixed(1);
            weightGoal = `You need to lose ${weightToLose} kg to reach a normal BMI.`;
            dietPlan = 'Low-calorie diet for weight loss: Reduce carb intake and increase protein.';
        }
        document.getElementById('weight-goal').innerHTML = weightGoal;
        document.getElementById('diet-info').innerHTML = dietPlan;

        // Suggest exercises based on weight
        let squatWeight = (weight * 1.5).toFixed(1); // Max squat = 1.5x body weight
        let benchPress = (weight * 1.2).toFixed(1); // Max bench press = 1.2x body weight
        let deadlift = (weight * 2).toFixed(1); // Max deadlift = 2x body weight

        document.getElementById('squat-plan').innerHTML = `<h4>Squat Plan</h4><p>Max Squat: ${squatWeight} kg</p>`;
        document.getElementById('bench-plan').innerHTML = `<h4>Bench Press Plan</h4><p>Max Bench Press: ${benchPress} kg</p>`;
        document.getElementById('deadlift-plan').innerHTML = `<h4>Deadlift Plan</h4><p>Max Deadlift: ${deadlift} kg</p>`;
    } else {
        alert("Please enter both weight and height.");
    }
}
