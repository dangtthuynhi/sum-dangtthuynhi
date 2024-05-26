<h1>sum-dangtthuynhi</h1>

<p>A versatile library to sum integers, floats, and arrays of numbers. This library provides multiple functions to handle various summation needs.</p>

<h2>Table of Contents</h2>

<ul>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<ul>
<li><a href="#importing-the-library">Importing the Library</a></li>
<li><a href="#functions">Functions</a></li>
<ul>
<li><a href="#sumintegersargs"><code>sumIntegers(...args)</code></a></li>
<li><a href="#sumfloatsargs"><code>sumFloats(...args)</code></a></li>
<li><a href="#sumarraysargs"><code>sumArrays(...args)</code></a></li>
<li><a href="#sumargs"><code>sum(...args)</code></a></li>
</ul>
<li><a href="#examples">Examples</a></li>
</ul>
<li><a href="#license">License</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#acknowledgments">Acknowledgments</a></li>
</ul>
<h2>Installation</h2>

<p>You can install the library using npm:</p>

<pre><code>npm install sum-dangtthuynhi
</code></pre>

<h2>Usage</h2>

<h3>Importing the Library</h3>

<p>To use the <code>sum-dangtthuynhi</code> in your project, you need to import it first:</p>

<pre><code>const sum = require('sum-dangtthuynhi');
</code></pre>

<h3>Functions</h3>

<h4><code>sumIntegers(...args)</code></h4>

<p>This function calculates the sum of integers passed as arguments.</p>

<h5>Parameters:</h5>

<ul>
<li><code>...args</code>: Integers to be summed.</li>
</ul>

<p>Example:</p>

<pre><code>const result = sum.sumIntegers(1, 2, 3, 4, 5);
console.log(result); // Output: 15
</code></pre>

<h4><code>sumFloats(...args)</code></h4>

<p>This function calculates the sum of floats passed as arguments.</p>

<h5>Parameters:</h5>

<ul>
<li><code>...args</code>: Floats to be summed.</li>
</ul>

<p>Example:</p>

<pre><code>const result = sum.sumFloats(1.5, 2.3, 3.7);
console.log(result); // Output: 7.5
</code></pre>

<h4><code>sumArrays(...args)</code></h4>

<p>This function calculates the sum of arrays of numbers passed as arguments.</p>

<h5>Parameters:</h5>

<ul>
<li><code>...args</code>: Arrays of numbers to be summed.</li>
</ul>

<p>Example:</p>

<pre><code>const result = sum.sumArrays([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [5, 7, 9]
</code></pre>

<h4><code>sum(...args)</code></h4>

<p>This function calculates the sum of any type of number passed as arguments.</p>

<h5>Parameters:</h5>

<ul>
<li><code>...args</code>: Numbers to be summed.</li>
</ul>

<p>Example:</p>

<pre><code>const result = sum.sum(1, 2.5, [3, 4]);
console.log(result); // Output: 10.5
</code></pre>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="./LICENSE">LICENSE</a> file for details.</p>

<h2>Contributing</h2>

<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.</p>

<h2>Acknowledgments</h2>

<p>Thank you to all the contributors and open-source community for their support and dedication.</p>
