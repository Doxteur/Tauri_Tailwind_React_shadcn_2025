import { useAppSelector, useAppDispatch } from '@/core/store/hooks';
import { markNotificationAsRead, clearAllNotifications } from '@/features/ui/uiSlice';
import { X, Bell, Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './button';

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'info':
      return <Info className="text-primary" size={16} />;
    case 'success':
      return <CheckCircle className="text-chart-3" size={16} />;
    case 'warning':
      return <AlertTriangle className="text-chart-4" size={16} />;
    case 'error':
      return <AlertCircle className="text-destructive" size={16} />;
    default:
      return <Info className="text-primary" size={16} />;
  }
};

export const NotificationsPanel = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector(state => state.ui);
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleClearAll = () => {
    dispatch(clearAllNotifications());
    setIsOpen(false);
  };

  useEffect(() => {
    if (unreadCount > 0 && !isOpen) {
      // Afficher automatiquement les nouvelles notifications
      setIsOpen(true);

      // Fermer automatiquement après un délai si nécessaire
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [unreadCount]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-muted transition-colors"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-destructive-foreground bg-destructive rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-md shadow-lg z-50">
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h3 className="font-medium text-card-foreground">Notifications</h3>
            <div className="flex space-x-2">
              {notifications.length > 0 && (
                <Button
                  onClick={handleClearAll}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  Tout effacer
                </Button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-card-foreground"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                Aucune notification
              </div>
            ) : (
              <div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 border-b border-border last:border-b-0 hover:bg-muted cursor-pointer ${!notification.read ? 'bg-primary/10' : ''}`}
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-0.5">
                        <NotificationIcon type={notification.type} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-card-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
