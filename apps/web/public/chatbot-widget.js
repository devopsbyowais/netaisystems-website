(function() {
  // Configuration
  const API_URL = 'https://ragchat.netaisystems.com/api/widget/chat';
  const WIDGET_KEY = 'wk_d6477555999456d530de77ed06295c02';

  // Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    #netai-chatbot-widget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }
    #netai-chatbot-widget * {
      box-sizing: border-box;
    }
    .netai-toggle-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #00A8E8;
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, background-color 0.2s ease;
      float: right;
    }
    .netai-toggle-btn:hover {
      transform: scale(1.05);
      background-color: #0090c7;
    }
    .netai-toggle-btn svg {
      width: 28px;
      height: 28px;
      fill: currentColor;
    }
    .netai-chat-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      max-height: calc(100vh - 100px);
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .netai-chat-window.netai-open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .netai-chat-header {
      background-color: #00A8E8;
      color: #ffffff;
      padding: 16px 20px;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .netai-close-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    .netai-close-btn:hover {
      opacity: 1;
    }
    .netai-close-btn svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    .netai-chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background-color: #f8fafc;
    }
    .netai-message {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .netai-message.user {
      align-self: flex-end;
      background-color: #00A8E8;
      color: white;
      border-bottom-right-radius: 4px;
    }
    .netai-message.bot {
      align-self: flex-start;
      background-color: #ffffff;
      color: #334155;
      border: 1px solid #e2e8f0;
      border-bottom-left-radius: 4px;
    }
    .netai-loading {
      align-self: flex-start;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 12px 16px;
      border-radius: 12px;
      border-bottom-left-radius: 4px;
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .netai-dot {
      width: 6px;
      height: 6px;
      background-color: #94a3b8;
      border-radius: 50%;
      animation: netai-bounce 1.4s infinite ease-in-out both;
    }
    .netai-dot:nth-child(1) { animation-delay: -0.32s; }
    .netai-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes netai-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    .netai-chat-input-area {
      padding: 16px;
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 8px;
    }
    .netai-chat-input {
      flex: 1;
      min-width: 0;
      padding: 10px 14px;
      border: 1px solid #cbd5e1;
      border-radius: 20px;
      font-size: 14px;
      color: #000000;
      outline: none;
      transition: border-color 0.2s;
    }
    .netai-chat-input:focus {
      border-color: #00A8E8;
    }
    .netai-chat-send {
      background-color: #00A8E8;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 0 16px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .netai-chat-send:hover {
      background-color: #0090c7;
    }
    .netai-chat-send:disabled {
      background-color: #94a3b8;
      cursor: not-allowed;
    }
    /* Never stack the launcher over the open chat or focused form fields. */
    .netai-chat-window.netai-open + .netai-toggle-btn,
    #netai-chatbot-widget.netai-form-focus .netai-toggle-btn {
      opacity: 0;
      pointer-events: none;
      transform: scale(0.9);
    }
    @media (max-width: 480px) {
      #netai-chatbot-widget {
        bottom: 12px;
        right: 12px;
      }
      .netai-chat-window {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        border-radius: 0;
      }
      .netai-toggle-btn {
        width: 48px;
        height: 48px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
      }
      .netai-toggle-btn svg {
        width: 24px;
        height: 24px;
      }
      .netai-chat-header,
      .netai-chat-input-area {
        padding-left: 14px;
        padding-right: 14px;
      }
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'netai-chatbot-widget';
  widgetContainer.innerHTML = `
    <div class="netai-chat-window" id="netai-chat-window" role="dialog" aria-modal="true" aria-label="Chat support" aria-hidden="true">
      <div class="netai-chat-header">
        <span>Chat Support</span>
        <button class="netai-close-btn" id="netai-close-btn" aria-label="Close chat">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div class="netai-chat-messages" id="netai-chat-messages">
        <div class="netai-message bot">Hello! How can I help you today?</div>
      </div>
      <div class="netai-chat-input-area">
        <input type="text" class="netai-chat-input" id="netai-chat-input" placeholder="Type your message..." autocomplete="off" />
        <button class="netai-chat-send" id="netai-chat-send">Send</button>
      </div>
    </div>
    <button class="netai-toggle-btn" id="netai-toggle-btn" aria-label="Open chat" aria-expanded="false" aria-controls="netai-chat-window">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    </button>
  `;
  document.body.appendChild(widgetContainer);

  // DOM Elements
  const toggleBtn = document.getElementById('netai-toggle-btn');
  const closeBtn = document.getElementById('netai-close-btn');
  const chatWindow = document.getElementById('netai-chat-window');
  const messagesContainer = document.getElementById('netai-chat-messages');
  const inputField = document.getElementById('netai-chat-input');
  const sendBtn = document.getElementById('netai-chat-send');

  let isOpen = false;
  let isWaiting = false;

  // Toggle Chat Window
  function setChatOpen(open) {
    isOpen = open;
    chatWindow.classList.toggle('netai-open', open);
    chatWindow.setAttribute('aria-hidden', open ? 'false' : 'true');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', open ? 'Close chat' : 'Open chat');
    if (open) {
      inputField.focus();
    } else {
      toggleBtn.focus();
    }
  }

  function toggleChat() {
    setChatOpen(!isOpen);
  }

  toggleBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', () => setChatOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) setChatOpen(false);
  });

  // Keep the launcher from covering form inputs / submit buttons on small screens.
  document.addEventListener('focusin', (event) => {
    const target = event.target;
    if (widgetContainer.contains(target)) return;
    if (target.matches('input, textarea, select, [contenteditable="true"]')) {
      widgetContainer.classList.add('netai-form-focus');
    }
  });
  document.addEventListener('focusout', (event) => {
    if (widgetContainer.contains(event.target)) return;
    window.requestAnimationFrame(() => {
      const active = document.activeElement;
      if (!active || !active.matches('input, textarea, select, [contenteditable="true"]')) {
        widgetContainer.classList.remove('netai-form-focus');
      }
    });
  });

  // Append Message to UI
  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `netai-message ${sender}`;
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
  }

  // Show/Hide Loading Indicator
  function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'netai-loading';
    loadingDiv.id = 'netai-loading-indicator';
    loadingDiv.innerHTML = '<div class="netai-dot"></div><div class="netai-dot"></div><div class="netai-dot"></div>';
    messagesContainer.appendChild(loadingDiv);
    scrollToBottom();
  }

  function hideLoading() {
    const loadingDiv = document.getElementById('netai-loading-indicator');
    if (loadingDiv) {
      loadingDiv.remove();
    }
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle Send Message
  async function sendMessage() {
    const text = inputField.value.trim();
    if (!text || isWaiting) return;

    // UI Updates
    appendMessage(text, 'user');
    inputField.value = '';
    isWaiting = true;
    sendBtn.disabled = true;
    inputField.disabled = true;
    showLoading();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          widgetKey: WIDGET_KEY,
          message: text
        })
      });

      const responseText = await response.text();
      let botReply = responseText;

      // Try to parse JSON if the API returns a JSON object
      try {
        const json = JSON.parse(responseText);
        botReply = json.answer || json.response || json.message || json.reply || json.text || responseText;
      } catch (e) {
        // If it's not JSON, use the raw text
      }

      hideLoading();
      appendMessage(botReply, 'bot');

    } catch (error) {
      console.error('Chatbot API Error:', error);
      hideLoading();
      appendMessage('Sorry, I am having trouble connecting right now. Please try again later.', 'bot');
    } finally {
      isWaiting = false;
      sendBtn.disabled = false;
      inputField.disabled = false;
      inputField.focus();
    }
  }

  // Event Listeners for Sending
  sendBtn.addEventListener('click', sendMessage);
  inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

})();