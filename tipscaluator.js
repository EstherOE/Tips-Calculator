<!--
  TIP Calculator
  
   
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Tip Calculator</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator"  />
	<link href= "tipcalculator.css" type = "text/css" rel = "stylesheet"/>
</head>

<body>
	<div id="container">
  <h1>Tip Calculator</h1>
  <div id="calculator">


    <form action ="" >
      <p>How much was your bill?
          
    
          $ <input id="billamt" type="text" placeholder="Bill Amount">
          
          <p>How was your service?
           
           <select id="serviceQual">
            <option disabled selected value="0">-- Choose an Option --</option>
            <option value="0.7">70&#37; &#45; Outstanding</option>
            <option value="0.55">55&#37; &#45; Good</option>
            <option value="0.40">40&#37; &#45; It was OK</option>
            <option value="0.25">25&#37; &#45; Bad</option>
            <option value="0.10">10&#37; &#45; Terrible</option>
            <option value="0.05">5&#37; &#45; Very Terrible</option>
        </select>
        <p>
           <p> Where it is ?
             <select id="location">
            <option disabled selected value="0">-- Choose an Option --</option>
            <option value="0.5">50&#37; &#45; Bank</option>
            <option balue = "0.2">20&#37; &#45;  Resturant</option>
            <option value="0.15">15&#37; &#45; Cinema</option>
            <option balue = "0.05">5&#37; &#45;  Children's Play Ground</option>
          </select>
         <p>
    </form>
    <p>How many people are sharing the bill?  <input id="peopleamt" type="text" placeholder="Number of People"> </p>
    
    <button type="button" id="calculate">Calculate!</button>

  </div>
  <!--calculator end-->
  <div id="totalTip">
    <sup>$</sup><span id="tip">0.00</span> 
    <span>each</span>
    
  </div>
  <!--totalTip end-->

</div>
<!--container end-->

<script type="text/javascript" src="tipcalculator.js"></script>
</body>

</html>
