<?php
    function myFirstFunction() {
        echo "<p>Hello this is my first functino</p>";
    }
    myFirstFunction();
    myFirstFunction();
    function greet($name, $col) {
        echo "<p>Hi, my name is $name and my favourite colour is $col</p>";
    }
    greet('Dave', 'red');
    greet('Susan', 'blue');
?>

<h1><?php bloginfo('name'); ?></h1>
<p><?php bloginfo('description') ?></p>

<?php 
    $myName = "Dave";
?>
<p>My name is <?php echo $myName; ?></p>

<?php
    $count = 1;

    while($count < 101) {
        echo "<li>$count</li>";
        $count++;
    }
?>
<?php
    $names = array('dave', 'Susan', 'Ian', 'Tony');

    $count = 0;

    while($count < count($names)) {
        echo "<li>My name is $names[$count]</li>";
        $count++;
    }
?>

<p>My name is <?php echo $names[0]; ?></p>
<p>My name is <?php echo $names[1]; ?></p>
<p>My name is <?php echo $names[2]; ?></p>
<p>My name is <?php echo $names[3]; ?></p>