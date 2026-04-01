<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .card {
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }
        .header {
            background: linear-gradient(135deg, #011030, #1e3a5f);
            padding: 32px;
            text-align: center;
        }
        .header h1 {
            color: #ff7700;
            font-size: 24px;
            margin: 0;
        }
        .header p {
            color: #94a3b8;
            font-size: 14px;
            margin-top: 8px;
        }
        .body {
            padding: 32px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 16px;
        }
        .reply-content {
            background: #f1f5f9;
            border-left: 4px solid #ff7700;
            padding: 20px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
            color: #334155;
            line-height: 1.7;
            white-space: pre-wrap;
        }
        .original-label {
            font-size: 13px;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 28px;
            margin-bottom: 8px;
        }
        .original-message {
            background: #fafafa;
            border: 1px solid #e2e8f0;
            padding: 16px;
            border-radius: 12px;
            color: #64748b;
            font-size: 14px;
            font-style: italic;
            line-height: 1.6;
        }
        .footer {
            background: #f8fafc;
            padding: 24px 32px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer p {
            color: #94a3b8;
            font-size: 13px;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="header">
                <h1>{{ config('app.name') }}</h1>
                <p>Thank you for reaching out!</p>
            </div>
            <div class="body">
                <p class="greeting">Hi {{ $clientMessage->name }},</p>
                <p style="color: #475569; line-height: 1.6;">Thank you for your message. Here's my reply:</p>

                <div class="reply-content">
                    {{ $replyContent }}
                </div>

                <p class="original-label">Your Original Message</p>
                <div class="original-message">
                    {{ $clientMessage->message }}
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from {{ config('app.name') }} portfolio.</p>
            </div>
        </div>
    </div>
</body>
</html>
