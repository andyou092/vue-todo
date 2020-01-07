
<template>

        <div>
         <h2>이벤트 리스너와 수식어</h2> 
        <p>v-on 디렉티브를 사용하여 DOM 이벤트를 듣고 트리거 될 때 JavaScript를 실행할 수 있습니다.</p>
       
        
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
      <h3>결과:</h3>
      <span class="demo">
        <button v-on:click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
      </span>



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
<h3>결과:</h3>
  <span  class="demo">
    <button v-on:click="greet">Greet</button>
  </span>



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
<h3>결과:</h3>

<span class="demo">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</span>

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
<h3>결과:</h3>
<span class="demo">
<button    v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
</span>
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
<h3>결과:</h3>
<div class="demo">
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
</div>
<h2 id="이벤트-수식어"><a href="#이벤트-수식어" class="headerlink" title="이벤트 수식어"></a>이벤트 수식어</h2><p>이벤트 핸들러 내부에서 <code>event.preventDefault()</code> 또는 <code>event.stopPropagation()</code>를 호출하는 것은 매우 보편적인 일입니다. 메소드 내에서 쉽게 이 작업을 할 수 있지만, DOM 이벤트 세부 사항을 처리하는 대신 데이터 로직에 대한 메소드만 사용할 수 있으면 더 좋을 것입니다.</p>
<p>이 문제를 해결하기 위해, Vue는 <code>v-on</code> 이벤트에 <strong>이벤트 수식어</strong>를 제공합니다. 수식어는 점으로 표시된 접미사 입니다.</p>
<ul>
<li><code>.stop</code></li>
<li><code>.prevent</code></li>
<li><code>.capture</code></li>
<li><code>.self</code></li>
<li><code>.once</code></li>
<li><code>.passive</code></li>
</ul>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 클릭 이벤트 전파가 중단됩니다 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">v-on:click.stop</span>=<span class="hljs-string">"doThis"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 제출 이벤트가 페이지를 다시 로드 하지 않습니다 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">v-on:submit.prevent</span>=<span class="hljs-string">"onSubmit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 수식어는 체이닝 가능합니다 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">v-on:click.stop.prevent</span>=<span class="hljs-string">"doThat"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 단순히 수식어만 사용할 수 있습니다 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">v-on:submit.prevent</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 이벤트 리스너를 추가할 때 캡처모드를 사용합니다 --&gt;</span>
<span class="hljs-comment">&lt;!-- 즉, 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리합니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-on:click.capture</span>=<span class="hljs-string">"doThis"</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>


<span class="hljs-comment">&lt;!-- event.target이 엘리먼트 자체인 경우에만 트리거를 처리합니다 --&gt;</span>
<span class="hljs-comment">&lt;!-- 자식 엘리먼트에서는 안됩니다 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-on:click.self</span>=<span class="hljs-string">"doThat"</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p class="tip">관련 코드가 동일한 순서로 생성되므로 수식어를 사용할 때 순서를 지정하세요. 다시말해 <code>v-on:click.prevent.self</code>를 사용하면 <strong>모든 클릭</strong>을 막을 수 있으며 <code>v-on:click.self.prevent</code>는 엘리먼트 자체에 대한 클릭만 방지합니다.</p>

<blockquote>
<p>2.1.4에 새로 추가됨</p>
</blockquote>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 클릭 이벤트는 최대 한번만 트리거 됩니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">v-on:click.once</span>=<span class="hljs-string">"doThis"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></code></pre>
<p>네이티브 DOM 이벤트에 독점적인 다른 수식어와 달리,<code>.once</code> 수식어는 <a href="components.html#Using-v-on-with-Custom-Events">컴포넌트 이벤트</a>에서도 사용할 수 있습니다. 아직 컴포넌트에 대해 읽지 않았더라도 지금 당장은 걱정하지 마십시오.</p>
<blockquote>
<p>2.3.0+ 이후 추가됨</p>
</blockquote>
<p>Vue also offers the <code>.passive</code> modifier, corresponding to <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters" target="_blank" rel="noopener"><code>addEventListener</code>‘s <code>passive</code> option</a>.</p>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 스크롤의 기본 이벤트를 취소할 수 없습니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-on:scroll.passive</span>=<span class="hljs-string">"onScroll"</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>추가로, Vue는 <code>.passive</code> 수식어를 제공합니다. 특히 모바일 환경에서 성능향상에 도움이 됩니다. 예를 들어, 브라우저는 핸들러가 <code>event.preventDefault()</code>를 호출할지 알지 못하므로 프로세스가 완료된 후 스크롤 합니다. <code>.passive</code> 수식어는 이 이벤트가 기본 동작을 멈추지 않는다는 것을 브라우저에 알릴 수 있습니다.</p>
<p class="tip"><code>.passive</code>와 <code>.prevent</code>를 함께 사용하지 마세요. because <code>.prevent</code> will be ignored and your browser will probably show you a warning. Remember, <code>.passive</code> communicates to the browser that you <em>don’t</em> want to prevent the event’s default behavior.</p>




<h3 id="키-수식어"><a href="#키-수식어" class="headerlink" title="키 수식어"></a>키 수식어</h3><p>키보드 이벤트를 청취할 때, 종종 공통 키 코드를 확인해야 합니다. Vue는 키 이벤트를 수신할 때 <code>v-on</code>에 대한 키 수식어를 추가할 수 있습니다.</p>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- only call `vm.submit()` when the `key` is `Enter` --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-on:keyup.enter</span>=<span class="hljs-string">"submit"</span>&gt;</span></code></pre>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values" target="_blank" rel="noopener"><code>KeyboardEvent.key</code></a>를 통해 노출된 유효 키 이름을 케밥 케이스로 변환하여 수식어로 사용할 수 있습니다.</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-on:keyup.page-down</span>=<span class="hljs-string">"onPageDown"</span>&gt;</span></code></pre>
<p>위의 예제에서 핸들러는 <code>$event.key === &#39;PageDown&#39;</code> 일 때에만 호출됩니다.</p>
<h2 id="Key-Codes"><a href="#Key-Codes" class="headerlink" title="Key Codes"></a>Key Codes</h2><p class="tip">The use of <code>keyCode</code> events <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode" target="_blank" rel="noopener">is deprecated</a> and may not be supported in new browsers.</p>

<p>Using <code>keyCode</code> attributes is also permitted:</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-on:keyup.13</span>=<span class="hljs-string">"submit"</span>&gt;</span></code></pre>
<p>Vue provides aliases for the most commonly used key codes when necessary for legacy browser support:</p>
<ul>
<li><code>.enter</code></li>
<li><code>.tab</code></li>
<li><code>.delete</code> (“Delete” 와 “Backspace” 키 모두를 캡처합니다)</li>
<li><code>.esc</code></li>
<li><code>.space</code></li>
<li><code>.up</code></li>
<li><code>.down</code></li>
<li><code>.left</code></li>
<li><code>.right</code></li>
</ul>
<p class="tip">일부 키(<code>.esc</code>와 모든 화살표 키)는 IE9에서 일관성 없는 <code>key</code> 값을 가지고 있습니다. IE9를 지원해야하는 경우 내장 별칭이 선호됩니다.</p>

<p>또한 전역 <code>config.keyCodes</code> 객체를 통해 <a href="../api/#keyCodes">사용자 지정 키 수식어 별칭을 지정할 수 있습니다.</a></p>
<pre><code class="hljs js"><span class="hljs-comment">// `v-on:keyup.f1`을 사용할 수 있습니다.</span>
Vue.config.keyCodes.f1 = <span class="hljs-number">112</span></code></pre>
<h2 id="시스템-수식어-키-목록"><a href="#시스템-수식어-키-목록" class="headerlink" title="시스템 수식어 키 목록"></a>시스템 수식어 키 목록</h2><blockquote>
<p>2.1.0+에서 추가됨</p>
</blockquote>
<p>다음 수식어를 사용해 해당 수식어 키가 눌러진 경우에만 마우스 또는 키보드 이벤트 리스너를 트리거 할 수 있습니다.</p>
<ul>
<li><code>.ctrl</code></li>
<li><code>.alt</code></li>
<li><code>.shift</code></li>
<li><code>.meta</code></li>
</ul>
<blockquote>
<p>참고 : 매킨토시 키보드에서 meta는 command 키 입니다 (⌘). Windows 키보드에서 meta는 windows 키 (⊞) 입니다. Sun Microsystems 키보드에서 meta는 단색의 다이아몬드 (◆)로 표시됩니다. 특정 키보드의 경우, 특히 MIT 및 Lisp 시스템 키보드와 Knight 키보드, space-cadet 키보드와 같은 제품에는 “META” 레이블이 지정됩니다. Symbolics 키보드에서 메타는 “META” 또는 “Meta”로 표시됩니다.</p>
</blockquote>
<h3>예제:</h3>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- Alt + C --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> @<span class="hljs-attr">keyup.alt.67</span>=<span class="hljs-string">"clear"</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Ctrl + Click --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click.ctrl</span>=<span class="hljs-string">"doSomething"</span>&gt;</span>Do something<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p class="tip"><br>수식어 키는 일반 키와 다르며 <code>keyup</code> 이벤트와 함께 사용되면 이벤트가 발생할 때 수식어 키가 눌려있어야 합니다. 즉,<code>keyup.ctrl</code>는 <code>ctrl</code>을 누른 상태에서 키를 놓으면 트리거됩니다. <code>ctrl</code> 키만 놓으면 트리거되지 않습니다.<br></p>

<h3 id="exact-수식어"><a href="#exact-수식어" class="headerlink" title=".exact 수식어"></a><code>.exact</code> 수식어</h3><blockquote>
<p>2.5.0+에서 추가됨</p>
</blockquote>
<p><code>.exact</code> 수식어는 다른 시스템 수식어와 조합해 그 핸들러가 실행되기 위해 정확한 조합이 눌러야하는 것을 보여줍니다.</p>
<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- Alt 또는 Shift와 함께 눌린 경우에도 실행됩니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click.ctrl</span>=<span class="hljs-string">"onClick"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Ctrl 키만 눌려있을 때만 실행됩니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click.ctrl.exact</span>=<span class="hljs-string">"onCtrlClick"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 아래 코드는 시스템 키가 눌리지 않은 상태인 경우에만 작동합니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click.exact</span>=<span class="hljs-string">"onClick"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h3 id="마우스-버튼-수식어"><a href="#마우스-버튼-수식어" class="headerlink" title="마우스 버튼 수식어"></a>마우스 버튼 수식어</h3><blockquote>
<p>2.2.0 버전에서 추가됨</p>
</blockquote>
<ul>
<li><code>.left</code></li>
<li><code>.right</code></li>
<li><code>.middle</code></li>
</ul>
<p>위 수식어는 특정 마우스 버튼에 의해 트리거 된 이벤트로 핸들러를 제한합니다.</p>
<h2 id="왜-HTML로-된-리스너를-사용합니까"><a href="#왜-HTML로-된-리스너를-사용합니까" class="headerlink" title="왜 HTML로 된 리스너를 사용합니까"></a>왜 HTML로 된 리스너를 사용합니까</h2><p>이 모든 이벤트 청취 접근 방법이 우려 사항 분리(“separation of concerns”)에 대한 오래된 규칙을 어긴다고 생각할 수 있습니다. 모든 뷰 핸들러 함수와 표현식은 현재 뷰 처리 하는 ViewModel에 엄격히 바인딩 되기 때문에 유지보수가 어렵지 않습니다. 실제로 <code>v-on</code>을 사용하면 몇가지 이점이 있습니다.</p>
<ol>
<li><p>HTML 템플릿을 간단히 하여 JavaScript 코드 내에서 핸들러 함수 구현을 찾는 것이 더 쉽습니다.</p>
</li>
<li><p>JavaScript에서 이벤트 리스너를 수동으로 연결할 필요가 없으므로 ViewModel 코드는 순수 로직과 DOM이 필요하지 않습니다. 이렇게 하면 테스트가 쉬워집니다.</p>
</li>
<li><p>ViewModel이 파기되면 모든 이벤트 리스너가 자동으로 제거 됩니다. 이벤트 제거에 대한 걱정이 필요 없어집니다.</p>
</li>
</ol>

<h4>출처 : https://kr.vuejs.org/v2/guide/events.html</h4>

<p>---------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
</div>       
      
</template>

<script>
import AddUser from '../userComponent/AddUser'

export default {
  //el: ('#example-2'), 
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
    },
    warn1: function (message, event) {
    // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)      
    }//warn1 
   }
}//default
</script>

<style scoped>
  button{
    background-color:#2F3B52;; /* Green */
    /* border: none; */
    color: white;
    padding: 15px 30px;
    /* text-align: center; */
    text-decoration: none;
/*     display: inline-block; */
    font-size: 16px;
    
    
    border:3px solid rgb(97, 63, 65);
  }
  pre{
     border:3px solid rgb(63, 78, 97);
      width: 51%;
      background-color: rgb(132, 135, 138);
      text-align: left;
      color: white;
  }
  h2{
      text-align: left;
      width: 51%;
  }
  h3{
      text-align: left;
      width: 51%;
  }
  p{
      text-align: left;
      width: 51%;
  }
  ul{
      text-align: left;
  }
  li{
      text-align: left;
  }
  .demo{
    margin-left: -52%;
  }
 

</style>