## Introduction

**About the Experiment**

This experiment enables a student to learn
- How to analyze logic gates
- How to express Boolean expression using logic gates
- How to check equivalence of two Boolean expressions using logic gates
- How to check equivalence of two logic circuits consisiting of multiple gates


## Theory 

 Analysis of Logic gates using 7400(quad 2-input NAND gates),7402(quad 2-input NOR gates), 7404(HEX inverter),7408(quad 2-input AND gates),7432(quad 2-input OR gates). Diagrams of each chip are shown in Figure 

  <div align="center">
		<img src="images/7400.jpg"  style="width:400px;height:200px;"/>
                            <p>
                             Figure 1</p>
                            </div>

  <div align="center">
                             <img src="images/7402.jpg"  style="width:400px;height:200px;"/>
                             <p>
                             Figure 2
                             </p>
                             </div>
<div align="center">
                             <img src="images/7404.jpg"  style="width:400px;height:200px;"/>
                           <p>
                             Figure 3
                              </p>
                             </div>
                              <div align="center">
                             <img src="images/7432.jpg"  style="width:400px;height:200px;"/>
                             <p>
                             Figure 4
                             Fig: 1 . 7400(quad 2 input NAND gates) Fig: 2 . 7402 (quad 2 input NOR gates)
                             Fig: 3 . 7404(HEX inverter)Fig: 4 . 7432(quad 2-input OR gates)
                             </p>
                             </div>
                             
                  
                     
                              
(a) AB+<font style="text-decoration:overline">A</font>C+BC=AB+<font style="text-decoration:overline">A</font>C
                           
According to consensus theorem,the Boolean identity holds.
                           
                           
                            
 <div align="left">
                            <img src="images/gate1.jpg"  style="width:200px;height:100px;"/>
                            &nbsp;&nbsp;
                            <img src="images/gate2.jpg"  style="width:200px;height:100px;"/>
                            <br />
                           <p>In the above picture both circuits are equivalent.</p>
                          </div>
                           
<p>(b) AB+<font style="text-decoration:overline">A</font>C=(A+C)(<font style="text-decoration:overline">A</font>+B)</p> 
                             

According to consensus theorem,the Boolean identity holds.
                           
 <div align="left">                          
<img src="images/gate3.jpg"  style="width:200px;height:100px;"/>
                              &nbsp;&nbsp;
                            <img src="images/gate4.jpg"  style="width:200px;height:100px;"/> 
                             <br />
                             <p>In the above picture both circuits are equivalent.</p>
                             <br />
                              <p>(c)Verify eqivalence of AND-OR and NAND-NAND structure</p> 
                             <br />
                              <img src="images/gate5.jpg"  style="width:200px;height:100px;"/>
                              &nbsp;&nbsp;
                            <img src="images/gate6.jpg"  style="width:200px;height:100px;"/>
                            <br />
                            <p>In the above picture both circuits are equivalent.</p>
                             <br />
                            <p>(d)Verify eqivalence of OR-AND and NOR-NOR structure</p>

</div>
<div align="left"> 
  <img src="images/gate7.jpg"  style="width:200px;height:100px;"/>
                              &nbsp;&nbsp;
                            <img src="images/gate8.jpg"  style="width:200px;height:100px;"/>
                             <br />
                            <p>In the above picture both circuits are equivalent.</p>
                             <br /> 
                             </div>
                            
 Student may be asked to wire up the network of gates shown in the above figures.They can next verify that the output of the two circuits,viz z1 and z2 should attain the same value for each of the eight possible input combinations assigned to the variables A,B,C,and D. 