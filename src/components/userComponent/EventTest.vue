
<template>
        <div>
         <h3>이벤트 리스너와 수식어</h3> 
        <h4>v-on 디렉티브를 사용하여 DOM 이벤트를 듣고 트리거 될 때 JavaScript를 실행할 수 있습니다.</h4>
       
        
      <pre>
        <p>template</p>
        <code class="hljs html">
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-1"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"counter += 1"</span>&gt;</span>Add 1<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>위 버튼을 클릭한 횟수는 &#123;&#123; counter &#125;&#125; 번 입니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code>
      </pre>
      <pre>
        <code class="hljs js"><span class="hljs-keyword">var</span> example1 = <span class="hljs-keyword">new</span> Vue(&#123;
          <span class="hljs-attr">el</span>: <span class="hljs-string">'#example-1'</span>,
          <span class="hljs-attr">data</span>: &#123;
          <span class="hljs-attr">counter</span>: <span class="hljs-number">0</span>
          &#125;
          &#125;)
      <p>script</p>
          var example1 = new Vue({
            el: '#example-1',
            data: {
              counter: 0
            }
          })
        </code>
      </pre>
      <h4>결과</h4>
      <div id="example-1" class="demo">
        <button v-on:click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
      </div>





<h2 id="메소드-이벤트-핸들러"><a href="#메소드-이벤트-핸들러" class="headerlink" title="메소드 이벤트 핸들러"></a>메소드 이벤트 핸들러</h2><p>많은 이벤트 핸들러의 로직은 더 복잡할 것이므로, JavaScript를 <code>v-on</code> 속성 값으로 보관하는 것은 간단하지 않습니다. 이 때문에 <code>v-on</code>이 호출하고자 하는 메소드의 이름을 받는 이유입니다.</p>
<p>예제:</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-2"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- `greet`는 메소드 이름으로 아래에 정의되어 있습니다 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"greet"</span>&gt;</span>Greet<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<pre><code class="hljs js"><span class="hljs-keyword">var</span> example2 = <span class="hljs-keyword">new</span> Vue(&#123;
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#example-2'</span>,
  <span class="hljs-attr">data</span>: &#123;
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Vue.js'</span>
  &#125;,
  <span class="hljs-comment">// 메소드는 `methods` 객체 안에 정의합니다</span>
  <span class="hljs-attr">methods</span>: &#123;
    <span class="hljs-attr">greet</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>&#123;
      <span class="hljs-comment">// 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다</span>
      alert(<span class="hljs-string">'Hello '</span> + <span class="hljs-keyword">this</span>.name + <span class="hljs-string">'!'</span>)
      <span class="hljs-comment">// `event` 는 네이티브 DOM 이벤트입니다</span>
      <span class="hljs-keyword">if</span> (event) &#123;
        alert(event.target.tagName)
      &#125;
    &#125;
  &#125;
&#125;)

<span class="hljs-comment">// 또한 JavaScript를 이용해서 메소드를 호출할 수 있습니다.</span>
example2.greet() <span class="hljs-comment">// =&gt; 'Hello Vue.js!'</span></code></pre>
<p>결과:</p>
<div id="example-2" class="demo">
  <button v-on:click="greet">Greet</button>
</div>



<h2 id="인라인-메소드-핸들러"><a href="#인라인-메소드-핸들러" class="headerlink" title="인라인 메소드 핸들러"></a>인라인 메소드 핸들러</h2><p>메소드 이름을 직접 바인딩 하는 대신 인라인 JavaScript 구문에 메소드를 사용할 수도 있습니다.</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-3"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"say('hi')"</span>&gt;</span>Say hi<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"say('what')"</span>&gt;</span>Say what<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<pre><code class="hljs js"><span class="hljs-keyword">new</span> Vue(&#123;
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#example-3'</span>
  <span class="hljs-attr">methods</span>: &#123;
    <span class="hljs-attr">say</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">message</span>) </span>&#123;
      alert(message)
    &#125;
  &#125;
&#125;)</code></pre>
<p>결과:</p>

<div id="example-2" class="demo">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>

<p>때로 인라인 명령문 핸들러에서 원본 DOM 이벤트에 액세스 해야할 수도 있습니다. 특별한 <code>$event</code> 변수를 사용해 메소드에 전달할 수도 있습니다.</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"warn('Form cannot be submitted yet.', $event)"</span>&gt;</span>
  Submit
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<pre><code class="hljs js"><span class="hljs-comment">// ...</span>
<span class="hljs-attr">methods</span>: &#123;
  <span class="hljs-attr">warn</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">message, event</span>) </span>&#123;
    <span class="hljs-comment">// 이제 네이티브 이벤트에 액세스 할 수 있습니다</span>
    <span class="hljs-keyword">if</span> (event) event.preventDefault()
    alert(message)
  &#125;
&#125;</code></pre>

<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>


<p>---------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        
        <p>한 번에 여러 이벤트와 각각의 리스너 선언 할 수 있다.</p>
          <button v-on="{mousedown: doThis, mouseup:doThat}">
             객체로 이벤트 리스너 추가
          </button>     
        <p>폼 이벤트 리스너.</p>
          <button v-on:click="reverseMessage">메시지 뒤집기</button>
           <p>{{ message }}</p>

          <button v-on:click="reverseMessageArg('인자1')">인자값 추가 메시지 뒤집기</button>
           <p>{{ messageArg }}</p>

        <p>v-model을 이용한 양방향 바인딩</p>
        <input type="text" v-model="messageForm" v-on:keyup.enter="binding">

        <p>명시적으로 이벤트 정보 전달</p>
        <button v-on:click ="greet($event)">Greet</button>

        <p></p>
        <button v-on:click="warn('Form cannot be submitted yey.', $event)">Submit</button>
        </div>
</template>

<script>
import AddUser from '../userComponent/AddUser'



export default {
  el: '#example-2',
  el: '#example-3',
   data(){//데이터 배열로 초기화 지정
      return{
          message: '뒤집기 전',
           messageArg: '뒤집기 전',
           messageForm:'양방향 바인딩',
           name:'Vue.js',
           counter: 0
      } 
    },     
   methods:{
     doThis:function(){
      
       console.log('마우스가 눌렀어요.')
        },
      doThat:function(){
         
       console.log('마우스가 땠습니다.')
     },
     reverseMessage:function(){
       this.message= this.message.split('').reverse().join('');
     },
      reverseMessageArg:function(arg1){
       this.messageArg= this.messageArg.split('').reverse().join('')+arg1;
     },
     binding:function(){
       console.log(this.messageForm)
       alert('바뀐 값'+this.messageForm)
     },
     greet:function(event){
       alert('Hello '+ this.name);
       if(event){
          alert(event.target.tagName);
       }//if
     },
     warn:function(message,event){
        if(event)event.preventDefault
          alert(message);
        
     },
     say: function (message) {
          alert(message)
     },
      warn: function (message, event) {
      // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)
    }
       
   }
   
}
</script>

<style scoped>
  button{
    background-color:#2F3B52;; /* Green */
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  textarea{
    width: 50%;
    height: 20%;
  }
  pre{
    background-color:rgb(251, 253, 255);; /* Green */
    text-align: center;
    margin-left: 35%;
    width: 30%;
  }

</style>