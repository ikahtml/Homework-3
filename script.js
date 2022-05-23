// დავალება:  1

//  შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;

// let array = [ 5, 25, 89, 120, 36 ]
//  array.push('javascript', 'python')
//  console.log(array);

//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
    
// let array = [ 5, 25, 89, 120, 36 ]
//  array.unshift('html','css')
//  console.log(array);

//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;

// let array = [ 5, 25, 89, 120, 36 ]
// 
// console.log(array.length);
// 

//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

// let array = [ 5, 25, 89, 120, 36 ]
//  
    // array.shift() & array.pop()
    // console.log(array);

//   დაბეჭდეთ მასივში ახალი ელემენტები.

// let array = [ 5, 25, 89, 120, 36 ]
    // 
    // array.splice( 2, 1, 'HellCat')
    // console.log(array);



    // 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

    // გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
      
    // let fruitArray = [ 'orange', 'banana', 'pear'];
                // console.log(fruitArray.length);

    // მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
    // მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
    // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;

    // let fruitArray = [ 'orange', 'banana', 'pear'];
    //   fruitArray.push( 'apple') & fruitArray.push( 'ananas') & fruitArray.unshift('wattermelon')
    //   console.log(fruitArray.length);

    // მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;

    // let fruitArray = [ 'wattermelon', 'orange', 'banana', 'pear', 'ananas', 'apple']
        // fruitArray.splice(2, 0, 'mango')
        // console.log(fruitArray);

    // წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
    // გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

    // let fruitArray = [ 'wattermelon', 'orange', 'banana', 'pear', 'ananas', 'apple']
        // fruitArray.shift() & fruitArray.pop() 
        // console.log(fruitArray.length);
  
   
  
        // 3. მოცემულია მასივი:
        // map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
        // let array = [12, 25, 3, 6, 8, 14, 7, 23]
        //  let masiv = array.map(function(item){
            //   console.log(item/3);
        //  })

        // დავალება N4 .  filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

        // let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
        //    let numbersArray = array.filter(function(item){
            //    if( typeof item == 'number'){
                //    return item;
            //    }
        //    })
        //    console.log(numbersArray);
        //  arrow function ---->   let numbers = array.filter( (item) => typeof item =='number')
        //    console.log(numbers);

    //    დავალება N 5.მოცემული მასივიდან, ფილტრის საშულებით,  გამოიტანეთ მხოლოდ ის სიტყვები,
        //   რომელთა სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

        // let languages = ['html', 'css', 'javascript', 'python', 'php'];
        //  let minLetter = languages.filter(function (item){
            //  return item.length > 3 ;
        //  })
        //  console.log(minLetter);
        //  let minLetter = languages.filter( 
            //  (item3) => item3.length > 3 
        //  )
        //  console.log(minLetter);


    //    დავალება N 6.მოცემული მასივიდან Reduce მეთოდის საშუალებით მიიღეთ
        // ერთი კომბინირებული სტრინგი სახელწოდებით (academy of digital industries);

        // let array= ['academy', 'of', 'digital', 'industries']
            // let NewArray = array.reduce( 
                // (x,y) => x + " " + y
            // )
            // console.log(NewArray);
            // 

        //   დავალება N 7. მოცემული მასივიდან  შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით:
            //  თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
            //   თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
            //    სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;
// 
            // let array = [ 12, 'google', 32, null, 'yahoo', 25 ];
            // let result = array.map( item => {
                // if(typeof item == 'number'){
                    // return item * item ;
                // }else if( typeof item == 'string'){
                    // return item.toUpperCase();
                // }else {
                    // return item ;
                // }
            // } )
            // console.log(result);
// 
// 
        //   დავალება N 8;  მოცემული მასივიდან  Filter მეთოდის საშუალებით დააბრუნეთ ისეთი მასივი, 
            //   რომელიც შედგება ისეთი სიტყვებისგან რომლებიც შეიცავენ ასო m-ს ან M-ს;

            // let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

        //   1  // let NewMasiv = words.filter(  (item) => {
                // if( item.includes('m') || item.includes('M')){
                    // return true;
                // }
                // return false;
            // }
            // )
            // console.log(NewMasiv);


        //  let variant2 = words.filter( item => (item.includes('m') || item.includes('M')))
        //  console.log(variant2);
           
        //  let variant3 = words.filter( item => (item.toUpperCase().includes('M')))
        //  console.log(variant3);








         
        
        